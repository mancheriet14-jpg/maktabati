// Order success page: shown after a successful order.
// Displays order number, date, total, and action buttons.

import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatPrice } from '@/config/site';
import { dateLocale } from '@/lib/i18nData';

interface OrderSuccessState {
  orderNumber?: string;
  total?: number;
  date?: string;
}

export default function OrderSuccessPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { orderNumber, total, date } = (location.state ?? {}) as OrderSuccessState;

  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-success-50"
        >
          <CheckCircle className="h-12 w-12 text-success-500" />
        </motion.div>

        <h1 className="text-2xl font-extrabold text-neutral-800">{t('orderSuccess.title')}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          {t('orderSuccess.subtext')}
        </p>

        {orderNumber && (
          <div className="mt-6 rounded-2xl border border-neutral-100 bg-white p-5 shadow-soft">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500">{t('orderSuccess.orderNumber')}</span>
                <span className="font-bold text-neutral-800">{orderNumber}</span>
              </div>
              {date && (
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t('orderSuccess.orderDate')}</span>
                  <span className="font-bold text-neutral-800">
                    {new Date(date).toLocaleDateString(dateLocale())}
                  </span>
                </div>
              )}
              {total !== undefined && (
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t('orderSuccess.finalAmount')}</span>
                  <span className="font-bold text-primary-700">
                    {formatPrice(total)}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => navigate('/')}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-600 py-3 font-bold text-white transition hover:bg-primary-700"
          >
            <Home className="h-4 w-4" />
            {t('orderSuccess.returnHome')}
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 py-3 font-bold text-neutral-600 transition hover:bg-neutral-50"
          >
            <ShoppingBag className="h-4 w-4" />
            {t('common.continueShopping')}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
