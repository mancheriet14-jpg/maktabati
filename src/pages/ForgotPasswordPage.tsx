// Forgot password page: sends a reset link via Supabase Auth.

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { toast } from '@/lib/toast';
import AuthLayout from '@/components/auth/AuthLayout';

export default function ForgotPasswordPage() {
  const { t } = useTranslation();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);
    if (error) {
      toast(t('auth.forgotError'), 'error');
    } else {
      setSent(true);
      toast(t('auth.forgotSuccess'), 'success');
    }
  };

  return (
    <AuthLayout
      title={t('auth.forgotTitle')}
      footer={
        <Link to="/login" className="font-bold text-primary-600 hover:text-primary-700">
          {t('auth.backToLogin')}
        </Link>
      }
    >
      {sent ? (
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
            <Mail className="h-8 w-8 text-success-500" />
          </div>
          <p className="text-sm text-neutral-600">
            {t('auth.forgotSentMessage')}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-neutral-500">
            {t('auth.forgotInstructions')}
          </p>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('auth.email')}</label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pr-11 pl-4 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                placeholder="example@email.com"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary-600 py-3 font-bold text-white transition hover:bg-primary-700 disabled:opacity-60"
          >
            {loading ? t('auth.sending') : t('auth.sendReset')}
          </button>
        </form>
      )}
    </AuthLayout>
  );
}
