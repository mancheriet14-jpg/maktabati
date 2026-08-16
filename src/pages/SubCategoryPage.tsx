// Sub-category page: brand multi-select (horizontal scroll) + price filter + sort + products.
// Reached by clicking a sub-category card on the category page.

import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

import type { SortOption } from '@/types';
import { findSubCategory, brands, mainCategories } from '@/data/siteData';
import {
  productsBySubCategory,
  productsBySubCategoryAndBrands,
  brandsInSubCategory,
} from '@/data/products';
import { tMainCategory, tSubCategory, tBrand } from '@/lib/i18nData';
import { useSeo, SITE_DOMAIN } from '@/lib/seo';
import ProductCard from '@/components/ui/ProductCard';
import HorizontalScroll from '@/components/ui/HorizontalScroll';
import { SelectableCard } from '@/components/ui/CategoryCard';

export default function SubCategoryPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const info = slug ? findSubCategory(slug) : undefined;

  const sub = info?.sub;
  const mainSlug = info?.mainSlug;

  useSeo({
    title: sub
      ? `${tSubCategory(sub.slug)} | مكتبتي`
      : 'تصنيف فرعي | مكتبتي',
    description: sub
      ? `تسوق ${tSubCategory(sub.slug)} بأفضل الأسعار في الجزائر مع توصيل إلى جميع الولايات.`
      : 'تصفح المنتجات حسب التصنيف الفرعي.',
    path: `/subcategory/${slug ?? ''}`,
    image: sub ? `${SITE_DOMAIN}${sub.image}` : undefined,
  });

  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>('newest');
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('sort.newest') },
    { value: 'price-asc', label: t('sort.priceAsc') },
    { value: 'price-desc', label: t('sort.priceDesc') },
    { value: 'rating', label: t('sort.rating') },
  ];

  if (!sub || !mainSlug) {
    return (
      <div className="container-page py-20 text-center text-neutral-500">
        {t('subCategory.notFound')}
      </div>
    );
  }

  const mainCatName = tMainCategory(mainSlug);

  // Brands that have products in this sub-category
  const subBrandSlugs = brandsInSubCategory(mainSlug, sub.slug);
  const brandList =
    brands[mainSlug]?.filter((b) => subBrandSlugs.includes(b.slug)) ?? [];

  // Combined filtering: brand + price
  let productList = productsBySubCategory(mainSlug, sub.slug);
  if (activeBrands.length > 0) {
    productList = productsBySubCategoryAndBrands(mainSlug, sub.slug, activeBrands);
  }
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

  const toggleBrand = (brandSlug: string) => {
    setActiveBrands((prev) =>
      prev.includes(brandSlug)
        ? prev.filter((b) => b !== brandSlug)
        : [...prev, brandSlug],
    );
  };

  return (
    <div className="py-6">
      {/* Breadcrumb */}
      <nav className="container-page mb-4 flex items-center gap-1 text-xs text-neutral-400">
        <Link to="/" className="hover:text-primary-600">{t('common.home')}</Link>
        <ChevronLeft className="h-3 w-3" />
        <Link to={`/category/${mainSlug}`} className="hover:text-primary-600">
          {mainCatName}
        </Link>
        <ChevronLeft className="h-3 w-3" />
        <span className="text-neutral-600">{tSubCategory(sub.slug)}</span>
      </nav>

      {/* Title */}
      <div className="container-page">
        <h1 className="text-2xl font-extrabold text-neutral-800">{tSubCategory(sub.slug)}</h1>
      </div>

      {/* Brands — horizontal scroll, multi-select */}
      {brandList.length > 0 && (
        <section className="container-page mt-6">
          <h2 className="mb-4 text-lg font-extrabold text-neutral-800">
            {t('category.shopByBrand')}
          </h2>
          <HorizontalScroll>
            {brandList.map((brand) => (
              <SelectableCard
                key={brand.slug}
                image={brand.image}
                name={tBrand(brand.slug)}
                active={activeBrands.includes(brand.slug)}
                onClick={() => toggleBrand(brand.slug)}
              />
            ))}
          </HorizontalScroll>
        </section>
      )}

      {/* Filters + sort + products */}
      <section className="container-page mt-8">
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

            <div className="text-sm text-neutral-500">
              {activeBrands.length > 0
                ? `${t('filters.brandsPrefix')}${activeBrands.map((b) => tBrand(brandList.find((br) => br.slug === b)?.slug ?? b)).join(t('common.listSeparator'))}`
                : t('common.allProducts')}
            </div>
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
            {t('category.noProducts')}
          </p>
        )}
      </section>
    </div>
  );
}
