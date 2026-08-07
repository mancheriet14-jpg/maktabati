// Per-category section on the home page.
// Splits all products of a category into two independent single-row carousels
// so each row swipes independently.

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import type { Product } from '@/types';
import ProductCarousel from './ProductCarousel';

interface CategoryProductSectionProps {
  title: string;
  viewAllTo: string;
  products: Product[];
}

export default function CategoryProductSection({
  title,
  viewAllTo,
  products,
}: CategoryProductSectionProps) {
  const { t } = useTranslation();
  if (products.length === 0) return null;

  const midpoint = Math.ceil(products.length / 2);
  const rowOne = products.slice(0, midpoint);
  const rowTwo = products.slice(midpoint);

  return (
    <section className="container-page">
      <div className="mb-5 flex items-center justify-between">
        <Link
          to={viewAllTo}
          className="text-xl font-extrabold text-neutral-800 transition hover:text-primary-700 sm:text-2xl"
        >
          {title}
        </Link>
        <Link
          to={viewAllTo}
          className="flex items-center gap-1 text-sm font-medium text-primary-600 transition hover:text-primary-700"
        >
          {t('common.viewAll')}
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-4">
        <ProductCarousel products={rowOne} />
        {rowTwo.length > 0 && <ProductCarousel products={rowTwo} />}
      </div>
    </section>
  );
}
