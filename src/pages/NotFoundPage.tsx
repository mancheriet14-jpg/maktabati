// 404 fallback page with icon, message, and home button.

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass } from 'lucide-react';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
      <Compass className="h-20 w-20 text-neutral-300" />
      <h1 className="mt-6 text-4xl font-extrabold text-neutral-800">404</h1>
      <p className="mt-2 text-neutral-500">{t('notFound.message')}</p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-primary-600 px-8 py-3 font-bold text-white transition hover:bg-primary-700"
      >
        {t('notFound.returnHome')}
      </Link>
    </div>
  );
}
