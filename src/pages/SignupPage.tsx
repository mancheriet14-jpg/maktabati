// Signup page with full validation: name, email, phone, password, confirm password.
// Error messages displayed below each field.

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { toast } from '@/lib/toast';
import AuthLayout from '@/components/auth/AuthLayout';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!fullName.trim()) e.fullName = t('auth.errors.fullNameRequired');
    if (!email.trim()) e.email = t('auth.errors.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t('auth.errors.emailInvalid');
    if (phone.trim() && !/^0\d{8,9}$/.test(phone.replace(/\s/g, ''))) e.phone = t('auth.errors.phoneInvalid');
    if (!password) e.password = t('auth.errors.passwordRequired');
    else if (password.length < 6) e.password = t('auth.errors.passwordShort');
    if (password !== confirmPassword) e.confirmPassword = t('auth.errors.passwordMismatch');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setLoading(true);
    const { error } = await signUp(email, password, fullName, phone);
    setLoading(false);
    if (error) {
      setServerError(error);
    } else {
      toast(t('auth.signupSuccess'), 'success');
      navigate('/');
    }
  };

  return (
    <AuthLayout
      title={t('auth.signupTitle')}
      footer={
        <>
          {t('auth.haveAccount')}{' '}
          <Link to="/login" className="font-bold text-primary-600 hover:text-primary-700">
            {t('auth.loginLink')}
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {serverError && (
          <div className="rounded-xl bg-error-50 px-4 py-3 text-sm font-medium text-error-600">
            {serverError}
          </div>
        )}

        {/* Full name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('auth.fullName')}</label>
          <div className="relative">
            <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pr-11 pl-4 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              placeholder={t('auth.fullNamePlaceholder')}
            />
          </div>
          {errors.fullName && <p className="mt-1 text-xs text-error-500">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('auth.email')}</label>
          <div className="relative">
            <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pr-11 pl-4 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              placeholder="example@email.com"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-error-500">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('auth.phoneOptional')}</label>
          <div className="relative">
            <Phone className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pr-11 pl-4 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              placeholder="0XXXXXXXXX"
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-error-500">{errors.phone}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('auth.password')}</label>
          <div className="relative">
            <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {errors.password && <p className="mt-1 text-xs text-error-500">{errors.password}</p>}
        </div>

        {/* Confirm password */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('auth.confirmPassword')}</label>
          <div className="relative">
            <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pr-11 pl-4 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              placeholder="••••••••"
            />
          </div>
          {errors.confirmPassword && <p className="mt-1 text-xs text-error-500">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-primary-600 py-3 font-bold text-white transition hover:bg-primary-700 disabled:opacity-60"
        >
          {loading ? t('common.loading') : t('auth.signupButton')}
        </button>
      </form>
    </AuthLayout>
  );
}
