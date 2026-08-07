// Login page with email/password, error display, and forgot password link.

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { toast } from '@/lib/toast';
import AuthLayout from '@/components/auth/AuthLayout';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      const msg = error.toLowerCase();
      if (msg.includes('invalid login') || msg.includes('invalid credentials')) {
        setError(t('auth.loginError'));
      } else {
        setError(error);
      }
    } else {
      toast(t('auth.loginSuccess'), 'success');
      navigate('/');
    }
  };

  return (
    <AuthLayout
      title={t('auth.loginTitle')}
      footer={
        <>
          {t('auth.noAccount')}{' '}
          <Link to="/signup" className="font-bold text-primary-600 hover:text-primary-700">
            {t('auth.signupLink')}
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-xl bg-error-50 px-4 py-3 text-sm font-medium text-error-600">
            {error}
          </div>
        )}

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

        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('auth.password')}</label>
          <div className="relative">
            <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pr-11 pl-11 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="text-left">
          <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-700">
            {t('auth.forgotPassword')}
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-primary-600 py-3 font-bold text-white transition hover:bg-primary-700 disabled:opacity-60"
        >
          {loading ? t('common.loading') : t('auth.loginButton')}
        </button>
      </form>
    </AuthLayout>
  );
}
