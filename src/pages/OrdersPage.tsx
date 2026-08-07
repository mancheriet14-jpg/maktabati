// Orders page: list of the user's orders as expandable cards.
// Each card shows order number, customer info, wilaya + address, all order_items
// with quantities/prices/variants, subtotal, shipping_cost, total, status, date.
// Orders are ordered by created_at DESC. Customer info is shown once per order,
// not repeated per item. Historical product data comes from the order_items
// snapshot columns, so old orders stay readable even if products change.

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ChevronDown, ShoppingBag } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { formatPrice } from '@/config/site';
import { dateLocale, tProductName, tVariantName, tVariantOptionLabel, tWilaya } from '@/lib/i18nData';
import type { Order, OrderItem } from '@/types';

export default function OrdersPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [orderItems, setOrderItems] = useState<Record<string, OrderItem[]>>({});

  useEffect(() => {
    // Wait for the auth session to resolve before deciding to redirect.
    if (loading) return;
    if (!user) {
      navigate('/login');
      return;
    }
    (async () => {
      const { data } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      setOrders((data as Order[]) ?? []);
      setLoadingOrders(false);
    })();
  }, [user, navigate, loading]);

  const toggleOrder = async (orderId: string) => {
    if (expandedId === orderId) {
      setExpandedId(null);
      return;
    }
    setExpandedId(orderId);
    if (!orderItems[orderId]) {
      const { data } = await supabase
        .from('order_items')
        .select('*')
        .eq('order_id', orderId);
      setOrderItems((prev) => ({ ...prev, [orderId]: (data as OrderItem[]) ?? [] }));
    }
  };

  if (loading || loadingOrders) {
    return (
      <div className="container-page py-8">
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-neutral-100" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-8">
      <h1 className="mb-6 text-2xl font-extrabold text-neutral-800">{t('orders.title')}</h1>

      {orders.length === 0 ? (
        <div className="py-16 text-center">
          <Package className="mx-auto h-16 w-16 text-neutral-300" />
          <p className="mt-4 text-neutral-500">{t('orders.empty')}</p>
          <Link
            to="/"
            className="mt-4 inline-block rounded-full bg-primary-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700"
          >
            {t('common.continueShopping')}
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-soft"
            >
              {/* Order header */}
              <button
                onClick={() => toggleOrder(order.id)}
                className="flex w-full items-center justify-between p-4 text-right transition hover:bg-neutral-50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                    <ShoppingBag className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-800">{order.order_number}</p>
                    <p className="text-xs text-neutral-400">
                      {new Date(order.created_at).toLocaleDateString(dateLocale())}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
                    {t(`orders.status.${order.status}`, { defaultValue: order.status })}
                  </span>
                  <span className="text-sm font-bold text-primary-700">
                    {formatPrice(order.total)}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-neutral-400 transition ${expandedId === order.id ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {/* Order detail */}
              <AnimatePresence>
                {expandedId === order.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-neutral-100"
                  >
                    <div className="p-4">
                      {/* Items */}
                      <div className="space-y-3">
                        {(orderItems[order.id] ?? []).map((item) => (
                          <div key={item.id} className="flex items-center gap-3">
                            {item.product_image && (
                              <img
                                src={item.product_image}
                                alt={tProductName(item.product_id)}
                                className="h-14 w-14 rounded-lg object-cover"
                              />
                            )}
                            <div className="flex-1">
                              <p className="text-sm font-bold text-neutral-700">{tProductName(item.product_id)}</p>
                              {(item.variant_name || item.color || item.size) && (
                                <p className="mt-0.5 text-xs text-neutral-500">
                                  {[
                                    item.variant_option_label ? `${tVariantOptionLabel(item.variant_id ?? '')}: ${tVariantName(item.variant_id ?? '')}` : (item.variant_id ? tVariantName(item.variant_id) : ''),
                                    item.color && `${t('orders.color')}${item.color}`,
                                    item.size && `${t('orders.size')}${item.size}`,
                                  ]
                                    .filter(Boolean)
                                    .join(' • ')}
                                </p>
                              )}
                              {item.sku && (
                                <p className="text-xs text-neutral-400">SKU: {item.sku}</p>
                              )}
                              <p className="text-xs text-neutral-400">{t('orders.quantity')}{item.quantity}</p>
                            </div>
                            <div className="text-left">
                              <p className="text-sm font-bold text-primary-700">
                                {formatPrice(item.total_price ?? item.price * item.quantity)}
                              </p>
                              {item.old_price && (
                                <p className="text-xs text-neutral-400 line-through">
                                  {formatPrice(item.old_price * item.quantity)}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Summary */}
                      <div className="mt-4 space-y-1 border-t border-neutral-100 pt-3 text-sm">
                        <div className="flex justify-between text-neutral-500">
                          <span>{t('orders.subtotal')}</span>
                          <span>{formatPrice(order.subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-neutral-500">
                          <span>{t('orders.deliveryCost')}</span>
                          <span>{formatPrice(order.shipping_cost ?? order.delivery_fee)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-neutral-800">
                          <span>{t('orders.total')}</span>
                          <span className="text-primary-700">{formatPrice(order.total)}</span>
                        </div>
                      </div>

                      {/* Customer + shipping info (shown once per order) */}
                      <div className="mt-3 rounded-xl bg-neutral-50 p-3 text-sm text-neutral-600">
                        <p><span className="font-bold">{t('orders.name')}</span> {order.full_name}</p>
                        <p><span className="font-bold">{t('orders.phone')}</span> {order.phone}</p>
                        {order.customer_email && (
                          <p><span className="font-bold">{t('orders.email')}</span> {order.customer_email}</p>
                        )}
                        <p>
                          <span className="font-bold">{t('orders.wilaya')}</span> {tWilaya(order.wilaya)}
                          {order.commune && <span> — {order.commune}</span>}
                        </p>
                        <p><span className="font-bold">{t('orders.address')}</span> {order.address}</p>
                        {order.notes && (
                          <p><span className="font-bold">{t('orders.notes')}</span> {order.notes}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
