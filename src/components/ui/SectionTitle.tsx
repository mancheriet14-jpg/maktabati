// Reusable section header with title and optional "view all" link.

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  viewAllTo?: string;
  titleTo?: string;
}

export default function SectionTitle({ title, viewAllTo, titleTo }: SectionTitleProps) {
  const { t } = useTranslation();
  return (
    <div className="mb-5 flex items-center justify-between">
      {titleTo ? (
        <Link
          to={titleTo}
          className="text-xl font-extrabold text-neutral-800 transition hover:text-primary-700 sm:text-2xl"
        >
          {title}
        </Link>
      ) : (
        <h2 className="text-xl font-extrabold text-neutral-800 sm:text-2xl">
          {title}
        </h2>
      )}
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className="flex items-center gap-1 text-sm font-medium text-primary-600 transition hover:text-primary-700"
        >
          {t('common.viewAll')}
          <ChevronLeft className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
