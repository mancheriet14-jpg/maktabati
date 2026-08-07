// Search results page: comprehensive search across products, categories,
// sub-categories, and brands. If the top result is a category, sub-category,
// or brand, the user is redirected to that page. Otherwise matching
// products are displayed.

import { useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { searchAll, resultPath } from '@/lib/search';

export default function SearchPage() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const q = (params.get('q') ?? '').trim();

  const results = useMemo(() => searchAll(q), [q]);

  // If the single best result is a category, sub-category, or brand,
  // redirect there automatically.
  useEffect(() => {
    if (!q || results.length === 0) return;
    const top = results[0];
    if (top.type === 'category') {
      navigate(`/category/${top.categorySlug}`, { replace: true });
    } else if (top.type === 'subcategory') {
      navigate(`/subcategory/${top.subSlug}`, { replace: true });
    } else if (top.type === 'brand' && top.brandSlug) {
      const brandResult = results.find((r) => r.type === 'brand');
      if (brandResult?.brandSlug) {
        navigate(resultPath(brandResult), { replace: true });
      }
    }
  }, [q, results, navigate]);

  const productResults = results.filter((r) => r.type === 'product');

  return (
    <div className="container-page py-8">
      <h1 className="mb-2 text-2xl font-extrabold text-neutral-800">
        {t('search.results')}
      </h1>
      <p className="mb-6 text-sm text-neutral-500">
        {q ? t('search.searchFor', { q, count: productResults.length }) : t('search.typeToSearch')}
      </p>

      {productResults.length === 0 && q && (
        <div className="py-12 text-center">
          <Search className="mx-auto h-12 w-12 text-neutral-300" />
          <p className="mt-3 text-neutral-400">{t('search.noResults')}</p>
          <Link to="/" className="mt-4 inline-block text-primary-600">
            {t('common.backToHome')}
          </Link>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productResults.map((r) => (
          <ProductCard key={r.product!.id} product={r.product!} />
        ))}
      </div>
    </div>
  );
}
