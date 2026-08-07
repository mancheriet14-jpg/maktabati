// "Similar products" grid on the product page.
// Replaces the old horizontal carousel with a responsive vertical grid so
// all similar products are visible without horizontal scrolling.

import type { Product } from '@/types';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';

interface SimilarProductsProps {
  products: Product[];
}

export default function SimilarProducts({ products }: SimilarProductsProps) {
  const { t } = useTranslation();
  if (products.length === 0) return null;

  return (
    <section className="container-page mt-12">
      <SectionTitle title={t('product.similarProducts')} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
