// Bag collection page: shows products for a specific bag collection.
// No brand filter — just products directly with sort.

import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

import type { SortOption } from '@/types';
import { bagCollections, mainCategories } from '@/data/siteData';
import { productsByBagCollection } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { tMainCategory, tBagCollection } from '@/lib/i18nData';
import { useSeo, SITE_DOMAIN } from '@/lib/seo';

export default function BagCollectionPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const collection = bagCollections.find((c) => c.slug === slug);
  const [sort, setSort] = useState<SortOption>('newest');

  useSeo({
    title: collection
      ? `${tBagCollection(collection.slug)} | مكتبتي`
      : 'تشكيلة الحقائب | مكتبتي',
    description: collection
      ? `تسوق ${tBagCollection(collection.slug)} بأفضل الأسعار في الجزائر مع توصيل إلى جميع الولايات.`
      : 'تصفح تشكيلات الحقائب المدرسية.',
    path: `/bag-collection/${slug ?? ''}`,
    image: collection ? `${SITE_DOMAIN}${collection.image}` : undefined,
  });

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('sort.newest') },
    { value: 'price-asc', label: t('sort.priceAsc') },
    { value: 'price-desc', label: t('sort.priceDesc') },
    { value: 'rating', label: t('sort.rating') },
  ];

  const productList = useMemo(() => {
    if (!slug) return [];
    return productsByBagCollection(slug);
  }, [slug]);

  const sorted = useMemo(() => {
    const arr = [...productList];
    switch (sort) {
      case 'price-asc':
        return arr.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return arr.sort((a, b) => b.price - a.price);
      case 'rating':
        return arr.sort((a, b) => b.rating - a.rating);
      default:
        return arr.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
  }, [productList, sort]);

  if (!collection) {
    return (
      <div className="container-page py-20 text-center text-neutral-500">
        {t('bagCollection.notFound')}
      </div>
    );
  }

  return (
    <div className="py-6">
      {/* Breadcrumb */}
      <nav className="container-page mb-4 flex items-center gap-1 text-xs text-neutral-400">
        <Link to="/" className="hover:text-primary-600">{t('common.home')}</Link>
        <ChevronLeft className="h-3 w-3" />
        <Link to="/category/stationery" className="hover:text-primary-600">
          {tMainCategory('stationery')}
        </Link>
        <ChevronLeft className="h-3 w-3" />
        <span className="text-neutral-600">{tBagCollection(collection.slug)}</span>
      </nav>

      {/* Title */}
      <div className="container-page">
        <h1 className="text-2xl font-extrabold text-neutral-800">{tBagCollection(collection.slug)}</h1>
      </div>

      {/* Sort + products */}
      <section className="container-page mt-8">
        <div className="flex items-center justify-end gap-2">
          <label htmlFor="sort" className="text-sm text-neutral-500">
            {t('sort.label')}
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm outline-none transition focus:border-primary-400"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {sorted.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {sorted.length === 0 && (
          <p className="py-12 text-center text-neutral-400">
            {t('bagCollection.noProducts')}
          </p>
        )}
      </section>
    </div>
  );
}
