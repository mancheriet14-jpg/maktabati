// Offers page: all discounted products with price filter and sort.
// No brand filtering — all offers show immediately.

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import type { SortOption } from '@/types';
import { offerProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function OffersPage() {
  const { t } = useTranslation();
  const offers = useMemo(() => offerProducts(), []);

  const [sort, setSort] = useState<SortOption>('newest');
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('sort.newest') },
    { value: 'price-asc', label: t('sort.priceAsc') },
    { value: 'price-desc', label: t('sort.priceDesc') },
    { value: 'rating', label: t('sort.rating') },
  ];

  let productList = offers;
  if (maxPrice !== null) {
    productList = productList.filter((p) => p.price <= maxPrice);
  }

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

  return (
    <div className="py-6">
      <section className="container-page">
        <h1 className="mb-6 text-2xl font-extrabold text-neutral-800 sm:text-3xl">
          {t('offers.title')}
        </h1>
      </section>

      {/* Filters + sort */}
      <section className="container-page mt-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Price filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-neutral-500">{t('filters.maxPrice')}</label>
              <input
                type="number"
                value={maxPrice ?? ''}
                onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : null)}
                placeholder={t('filters.allPlaceholder')}
                className="w-20 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm outline-none transition focus:border-primary-400"
              />
            </div>

            <div className="text-sm text-neutral-500">{t('common.allProducts')}</div>
          </div>

          <div className="flex items-center gap-2">
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
        </div>

        {/* Products grid */}
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
            {t('offers.noOffers')}
          </p>
        )}
      </section>
    </div>
  );
}
