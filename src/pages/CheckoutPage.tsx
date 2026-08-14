// Checkout page: customer info form + order summary with confirmation modal.
// Supports guest checkout. Auto-fills saved data for logged-in users.
// Shipping cost is per-wilaya and per-delivery-type (office vs home), stored
// on the order so old orders never change.

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Building2, Home as HomeIcon } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { toast } from '@/lib/toast';
import {
  wilayaDelivery,
  getWilayaShipping,
  type DeliveryType,
} from '@/data/wilayas';
import { tProductName, tVariantName, tVariantOptionLabel, tWilaya } from '@/lib/i18nData';
import { formatPrice } from '@/config/site';

interface FormErrors {
  fullName?: string;
  phone?: string;
  wilaya?: string;
  deliveryType?: string;
  commune?: string;
  address?: string;
}

export default function CheckoutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const cartWilaya = useCartStore((s) => s.wilaya);
  const setWilaya = useCartStore((s) => s.setWilaya);
  const subtotal = useCartStore((s) => s.totalPrice());

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [wilaya, setLocalWilaya] = useState('');
  const [deliveryType, setDeliveryType] = useState<DeliveryType | ''>('');
  const [commune, setCommune] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Auto-fill from profile and preselect wilaya from cart
  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name ?? '');
      setPhone(profile.phone ?? '');
      setAddress(profile.address ?? '');
    }
    if (user?.email) setEmail(user.email);
    if (cartWilaya) setLocalWilaya(cartWilaya);
  }, [profile, user, cartWilaya]);

  // Shipping cost depends on both the selected wilaya and delivery type.
  // Until both are chosen, shipping is undefined and the total cannot be shown.
  const shippingCost =
    deliveryType ? getWilayaShipping(wilaya, deliveryType) : undefined;
  const total = shippingCost !== undefined ? subtotal + shippingCost : undefined;

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!fullName.trim()) e.fullName = t('checkout.errors.fullNameRequired');
    if (!phone.trim()) e.phone = t('checkout.errors.phoneRequired');
    else if (!/^0\d{8,9}$/.test(phone.replace(/\s/g, ''))) e.phone = t('checkout.errors.phoneInvalid');
    if (!wilaya.trim()) e.wilaya = t('checkout.errors.wilayaRequired');
    if (!deliveryType) e.deliveryType = t('checkout.errors.deliveryTypeRequired');
    // Commune and full address are required only for home delivery.
    if (deliveryType === 'home') {
      if (!commune.trim()) e.commune = t('checkout.errors.communeRequired');
      if (!address.trim()) e.address = t('checkout.errors.addressRequired');
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleConfirm = async () => {
    // Re-validate at submit time (defensive): items + wilaya + delivery type must be present.
    if (items.length === 0) {
      toast(t('checkout.errors.emptyCart'), 'error');
      return;
    }
    if (!deliveryType) {
      toast(t('checkout.errors.deliveryTypeRequired'), 'error');
      return;
    }
    const shipping = getWilayaShipping(wilaya, deliveryType);
    if (shipping === undefined) {
      toast(t('checkout.errors.selectWilaya'), 'error');
      return;
    }

    setSubmitting(true);
    const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;
    const finalTotal = subtotal + shipping;

    // Calculate total purchase cost from product data (NOT from user input).
    // Uses variant.purchasePrice if the item has a variant, otherwise product.purchasePrice.
    const totalPurchaseCost = items.reduce((sum, item) => {
      const unitCost = item.variant?.purchasePrice ?? item.product.purchasePrice ?? 0;
      return sum + unitCost * item.quantity;
    }, 0);
    const profit = subtotal - totalPurchaseCost;

    // 1. Create a single order row with customer info + shipping snapshot.
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        user_id: user?.id ?? null,
        full_name: fullName,
        phone,
        customer_email: email || null,
        wilaya,
        commune: commune || null,
        address: deliveryType === 'office'
          ? 'التوصيل إلى المكتب'
          : address,
          postal_code: postalCode || null,
        delivery_type: deliveryType,
        notes: notes || null,
        status: 'pending',
        subtotal,
        delivery_fee: shipping,
        shipping_cost: shipping,
        total: finalTotal,
        total_purchase_cost: totalPurchaseCost,
        profit,
      })
      .select('id')
      .single();

    if (orderError) {
      console.error('[checkout] orders insert failed:', orderError);
      toast(t('checkout.errors.submitError'), 'error');
      setSubmitting(false);
      return;
    }
    if (!orderData) {
      console.error('[checkout] orders insert returned no data (blocked by RLS?)');
      toast(t('checkout.errors.submitError'), 'error');
      setSubmitting(false);
      return;
    }

    // 2. Insert all order_items with the same order_id + product snapshot.
    // purchase_price comes from the product/variant data, NOT from user input.
    const orderItems = items.map((item) => {
      const unitPrice = item.variant?.price ?? item.product.price;
      const unitPurchasePrice = item.variant?.purchasePrice ?? item.product.purchasePrice ?? 0;
      return {
        order_id: orderData.id,
        product_id: item.product.id,
        product_name: item.product.name,
        product_image: item.variant?.images?.[0] ?? item.product.images[0] ?? null,
        quantity: item.quantity,
        price: unitPrice,
        purchase_price: unitPurchasePrice,
        old_price: (item.variant?.oldPrice ?? item.product.oldPrice) ?? null,
        total_price: unitPrice * item.quantity,
        variant_id: item.variant?.id ?? null,
        variant_name: item.variant?.name ?? null,
        variant_option_label: item.variant?.optionLabel ?? null,
        variant_sku: item.variant?.sku ?? null,
        sku: item.variant?.sku ?? item.product.sku ?? null,
      };
    });

    const { error: itemsError } = await supabase.from('order_items').insert(orderItems);

    if (itemsError) {
      console.error('[checkout] order_items insert failed:', itemsError);
      toast(t('checkout.errors.saveItemsError'), 'error');
      setSubmitting(false);
      return;
    }

    clear();
    setWilaya(null);
    setSubmitting(false);
    setShowConfirm(false);
    toast(t('checkout.errors.success'), 'success');
    navigate('/order-success', {
      state: { orderNumber, total: finalTotal, date: new Date().toISOString() },
    });
  };

  if (items.length === 0) {
    return (
      <div className="container-page py-16 text-center">
        <AlertCircle className="mx-auto h-16 w-16 text-neutral-300" />
        <p className="mt-4 text-neutral-500">{t('checkout.empty')}</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700"
        >
          {t('common.continueShopping')}
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:bg-white';

  return (
    <div className="container-page py-8">
      <h1 className="mb-6 text-2xl font-extrabold text-neutral-800">{t('checkout.title')}</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Customer info */}
        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft">
          <h2 className="mb-4 text-lg font-bold text-neutral-700">{t('checkout.customerInfo')}</h2>
          <div className="space-y-4">
            {/* Full name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('checkout.fullNameRequired')}</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
                placeholder={t('checkout.fullNamePlaceholder')}
              />
              {errors.fullName && <p className="mt-1 text-xs text-error-500">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('checkout.phoneRequired')}</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                placeholder="0XXXXXXXXX"
              />
              {errors.phone && <p className="mt-1 text-xs text-error-500">{errors.phone}</p>}
            </div>

            {/* Email (optional — for guests) */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('checkout.emailOptional')}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="example@email.com"
              />
            </div>

            {/* Wilaya */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('checkout.wilayaRequired')}</label>
              <select
                value={wilaya}
                onChange={(e) => {
                  setLocalWilaya(e.target.value);
                  setWilaya(e.target.value || null);
                }}
                className={inputClass}
              >
                <option value="">{t('checkout.selectWilaya')}</option>
                {wilayaDelivery.map((w) => (
                  <option key={w.name} value={w.name}>
                    {tWilaya(w.name)}
                  </option>
                ))}
              </select>
              {errors.wilaya && <p className="mt-1 text-xs text-error-500">{errors.wilaya}</p>}
            </div>

            {/* Delivery type */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                {t('checkout.deliveryTypeRequired')}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType('office')}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    deliveryType === 'office'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  {t('checkout.deliveryToOffice')}
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('home')}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    deliveryType === 'home'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <HomeIcon className="h-4 w-4" />
                  {t('checkout.deliveryToHome')}
                </button>
              </div>
              {errors.deliveryType && <p className="mt-1 text-xs text-error-500">{errors.deliveryType}</p>}
            </div>

            {/* Commune — required only for home delivery */}
            {deliveryType === 'home' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                  {t('checkout.communeRequired')}
                </label>
                <input
                  type="text"
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                  className={inputClass}
                  placeholder={t('checkout.communePlaceholder')}
                />
                {errors.commune && <p className="mt-1 text-xs text-error-500">{errors.commune}</p>}
              </div>
            )}

            {/* Full address — required only for home delivery */}
            {deliveryType === 'home' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                  {t('checkout.addressRequired')}
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className={inputClass}
                  placeholder={t('checkout.addressPlaceholder')}
                />
                {errors.address && <p className="mt-1 text-xs text-error-500">{errors.address}</p>}
              </div>
            )}

            {/* Postal code */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('checkout.postalCodeOptional')}</label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Notes */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('checkout.notesOptional')}</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className={inputClass}
                placeholder={t('checkout.notesPlaceholder')}
              />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="h-fit rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft">
          <h2 className="mb-4 text-lg font-bold text-neutral-700">{t('checkout.summary')}</h2>

          {/* Items */}
          <div className="space-y-3">
            {items.map((item) => {
              const unitPrice = item.variant?.price ?? item.product.price;
              const linePrice = unitPrice * item.quantity;
              const lineOldPrice = (item.variant?.oldPrice ?? item.product.oldPrice)
                ? (item.variant?.oldPrice ?? item.product.oldPrice!) * item.quantity
                : null;
              return (
                <div key={`${item.product.id}::${item.variant?.id ?? ''}`} className="flex items-center gap-3">
                  <img
                    src={item.variant?.images?.[0] ?? item.product.images[0]}
                    alt={tProductName(item.product.id)}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-neutral-700 line-clamp-1">{tProductName(item.product.id)}</p>
                    {item.variant && (
                      <p className="text-xs text-neutral-400">
                        {`${tVariantOptionLabel(item.variant.id)}: `}
                        {tVariantName(item.variant.id)}
                      </p>
                    )}
                    <p className="text-xs text-neutral-400">{t('checkout.quantity')}{item.quantity}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-primary-700">{formatPrice(linePrice)}</p>
                    {lineOldPrice && (
                      <p className="text-xs text-neutral-400 line-through">{formatPrice(lineOldPrice)}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Totals */}
          <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4 text-sm">
            <div className="flex justify-between text-neutral-500">
              <span>{t('checkout.goodsCost')}</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>{t('checkout.deliveryCost')}</span>
              <span>{formatPrice(shippingCost)}</span>
            </div>
            <div className="flex justify-between border-t border-neutral-100 pt-2 font-bold text-neutral-800">
              <span>{t('checkout.finalPrice')}</span>
              <span className="text-primary-700">{formatPrice(total)}</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (validate()) setShowConfirm(true);
            }}
            className="mt-6 w-full rounded-full bg-primary-600 py-3 font-bold text-white transition hover:bg-primary-700"
          >
            {t('checkout.confirmOrder')}
          </button>
        </div>
      </div>

      {/* Confirmation modal */}
      <AnimatePresence>
        {showConfirm && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
            onClick={() => !submitting && setShowConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-float"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-800">
                {t('checkout.confirmModal')}
              </h3>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleConfirm}
                  disabled={submitting}
                  className="flex-1 rounded-full bg-primary-600 py-2.5 font-bold text-white transition hover:bg-primary-700 disabled:opacity-60"
                >
                  {submitting ? t('checkout.sending') : t('checkout.confirmOrder')}
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  disabled={submitting}
                  className="flex-1 rounded-full border border-neutral-200 py-2.5 font-bold text-neutral-600 transition hover:bg-neutral-50"
                >
                  {t('common.cancel')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
