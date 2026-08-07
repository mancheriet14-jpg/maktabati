// Cart page: line items with quantity controls, clear all (with confirm),
// continue shopping, coupon field (UI only), wilaya selector for live shipping,
// and order summary. Shipping shows "غير محددة" until a wilaya is selected.

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft, Tag, AlertTriangle } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { toast } from '@/lib/toast';
import { formatPrice } from '@/config/site';
import { wilayaDelivery, getWilayaShipping } from '@/data/wilayas';
import { tProductName, tVariantName, tVariantOptionLabel, tWilaya } from '@/lib/i18nData';

export default function CartPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);
  const wilaya = useCartStore((s) => s.wilaya);
  const setWilaya = useCartStore((s) => s.setWilaya);
  const subtotal = useCartStore((s) => s.totalPrice());

  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [coupon, setCoupon] = useState('');

  const shippingCost = getWilayaShipping(wilaya);
  const total = shippingCost !== undefined ? subtotal + shippingCost : undefined;

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <ShoppingCart className="mx-auto h-16 w-16 text-neutral-300" />
        <p className="mt-4 text-neutral-500">{t('cart.empty')}</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full bg-primary-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700"
        >
          {t('common.startShopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-neutral-800">{t('cart.title')}</h1>
        <button
          onClick={() => setShowClearConfirm(true)}
          className="flex items-center gap-1.5 rounded-full border border-error-200 px-4 py-2 text-sm font-medium text-error-600 transition hover:bg-error-50"
        >
          <Trash2 className="h-4 w-4" />
          {t('cart.clear')}
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Items */}
        <div className="space-y-3 lg:col-span-2">
          {items.map((item) => {
            const unitPrice = item.variant?.price ?? item.product.price;
            const linePrice = unitPrice * item.quantity;
            const lineOldPrice = (item.variant?.oldPrice ?? item.product.oldPrice)
              ? (item.variant?.oldPrice ?? item.product.oldPrice!) * item.quantity
              : null;

            return (
              <div
                key={`${item.product.id}::${item.variant?.id ?? ''}`}
                className="flex gap-4 rounded-2xl border border-neutral-100 bg-white p-3 shadow-soft"
              >
                <Link to={`/product/${item.product.id}`} className="shrink-0">
                  <img
                    src={item.variant?.images?.[0] ?? item.product.images[0]}
                    alt={tProductName(item.product.id)}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="text-sm font-bold text-neutral-800 hover:text-primary-600"
                  >
                    {tProductName(item.product.id)}
                  </Link>

                  {/* Variant info */}
                  {item.variant && (
                    <div className="mt-0.5 flex flex-wrap gap-1.5">
                      {item.variant.optionLabel && (
                        <span className="text-xs text-neutral-400">
                          {tVariantOptionLabel(item.variant.id)}:
                        </span>
                      )}
                      <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                        {tVariantName(item.variant.id)}
                      </span>
                    </div>
                  )}

                  <span className="mt-1 text-sm font-extrabold text-primary-700">
                    {formatPrice(unitPrice)}
                  </span>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-neutral-200">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variant?.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variant?.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary-700">
                        {formatPrice(linePrice)}
                      </span>
                      {lineOldPrice && (
                        <span className="text-xs text-neutral-400 line-through">
                          {formatPrice(lineOldPrice)}
                        </span>
                      )}
                      <button
                        onClick={() => {
                          removeItem(item.product.id, item.variant?.id);
                          toast(t('cart.itemRemoved'), 'info');
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-error-50 hover:text-error-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Continue shopping */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 py-3 text-sm font-bold text-neutral-600 transition hover:bg-neutral-50"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('common.continueShopping')}
          </Link>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl border border-neutral-100 bg-white p-5 shadow-soft">
          <h2 className="mb-4 text-sm font-bold text-neutral-700">{t('cart.summary')}</h2>

          {/* Wilaya selector — determines shipping */}
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-neutral-700">
              {t('cart.deliveryWilaya')}
            </label>
            <select
              value={wilaya ?? ''}
              onChange={(e) => setWilaya(e.target.value || null)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:bg-white"
            >
              <option value="">{t('cart.selectWilaya')}</option>
              {wilayaDelivery.map((w) => (
                <option key={w.name} value={w.name}>
                  {tWilaya(w.name)}
                </option>
              ))}
            </select>
          </div>

          {/* Coupon field (UI only — for future activation) */}
          <div className="mb-4">
            <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2">
              <Tag className="h-4 w-4 text-neutral-400" />
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder={t('cart.couponPlaceholder')}
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <button
                onClick={() => {
                  if (coupon.trim()) {
                    toast(t('cart.couponInfo'), 'info');
                  }
                }}
                className="rounded-lg bg-neutral-200 px-3 py-1 text-xs font-bold text-neutral-600 transition hover:bg-neutral-300"
              >
                {t('cart.apply')}
              </button>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-600">
              <span>{t('cart.goodsCost')}</span>
              <span className="font-bold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>{t('cart.deliveryCost')}</span>
              <span className="font-bold">{formatPrice(shippingCost)}</span>
            </div>
            <div className="flex justify-between border-t border-neutral-100 pt-2 font-bold text-neutral-800">
              <span>{t('cart.total')}</span>
              <span className="text-primary-700">{formatPrice(total)}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-2.5 font-bold text-white transition hover:bg-primary-700"
          >
            {t('cart.checkout')}
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Clear confirmation modal */}
      <AnimatePresence>
        {showClearConfirm && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowClearConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-float"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error-50">
                <AlertTriangle className="h-8 w-8 text-error-500" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-800">
                {t('cart.confirmClear')}
              </h3>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    clear();
                    setShowClearConfirm(false);
                    toast(t('cart.cartCleared'), 'info');
                  }}
                  className="flex-1 rounded-full bg-error-500 py-2.5 font-bold text-white transition hover:bg-error-600"
                >
                  {t('cart.confirmClearBtn')}
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
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
