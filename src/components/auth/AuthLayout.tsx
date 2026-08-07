// Shared layout for auth pages (login, signup, forgot password).
// Centered card with logo, title, and children.

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Store } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function AuthLayout({ title, children, footer }: AuthLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white">
              <Store className="h-6 w-6" />
            </div>
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold text-neutral-800">{title}</h1>
        </div>

        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-card sm:p-8">
          {children}
        </div>

        {footer && <div className="mt-4 text-center text-sm text-neutral-500">{footer}</div>}
      </div>
    </div>
  );
}
