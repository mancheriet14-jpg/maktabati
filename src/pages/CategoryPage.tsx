// Category page: slider → bag collections (stationery only) →
// sub-categories (horizontal scroll) → brands (horizontal scroll, multi-select) →
// price filter + sort → products. All filters work together.

import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import type { MainCategorySlug, SortOption } from '@/types';
import {
  mainCategories,
  subCategories,
  brands,
  categorySliderImages,
  bagCollections,
} from '@/data/siteData';
import { productsByCategory } from '@/data/products';
import { tMainCategory, tSubCategory, tBagCollection, tBrand } from '@/lib/i18nData';
import ProductCard from '@/components/ui/ProductCard';
import HorizontalScroll from '@/components/ui/HorizontalScroll';
import CategoryCard, { SelectableCard } from '@/components/ui/CategoryCard';
import CategoryPromoSlider from '@/components/home/CategoryPromoSlider';
import { categoryPromoSlides } from '@/data/categoryPromoSlides';

const sliderConfig: SwiperOptions = {
  modules: [Autoplay, Pagination, EffectFade],
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: { clickable: true },
  effect: 'fade',
  fadeEffect: { crossFade: true },
};

export default function CategoryPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const category = mainCategories.find((c) => c.slug === slug);

  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>('newest');
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  useMemo(() => {
    setActiveBrands([]);
    setMaxPrice(null);
  }, [slug]);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('sort.newest') },
    { value: 'price-asc', label: t('sort.priceAsc') },
    { value: 'price-desc', label: t('sort.priceDesc') },
    { value: 'rating', label: t('sort.rating') },
  ];

  if (!category) {
    return (
      <div className="container-page py-20 text-center text-neutral-500">
        {t('category.notFound')}
      </div>
    );
  }

  const catSlug = category.slug as MainCategorySlug;
  const subs = subCategories[catSlug] ?? [];
  const brandList = brands[catSlug] ?? [];
  const showBagCollections = catSlug === 'stationery';

  // Combined filtering: brand + price
  let productList = productsByCategory(catSlug);
  if (activeBrands.length > 0) {
    productList = productList.filter((p) => activeBrands.includes(p.brand));
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
      {/* Category slider */}
      <section className="container-page">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <Swiper {...sliderConfig} className="h-[90px] sm:h-[140px] lg:h-[180px]">
            {(categorySliderImages[catSlug] ?? []).map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-full w-full">
                  <img src={img} alt={`${tMainCategory(category.slug)} ${i + 1}`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-2xl font-extrabold text-white drop-shadow-lg sm:text-4xl">
                      {tMainCategory(category.slug)}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Promo slider — images only, links to products */}
      {categoryPromoSlides[catSlug] && (
        <section className="container-page mt-4">
          <CategoryPromoSlider slides={categoryPromoSlides[catSlug]!} />
        </section>
      )}

      {/* Bag collections (stationery only) */}
      {showBagCollections && (
        <section className="container-page mt-8">
          <h2 className="mb-4 text-lg font-extrabold text-neutral-800">
            {t('category.shopBags')}
          </h2>
          <HorizontalScroll>
            {bagCollections.map((col) => (
              <CategoryCard
                key={col.slug}
                to={`/bag-collection/${col.slug}`}
                image={col.image}
                name={tBagCollection(col.slug)}
              />
            ))}
          </HorizontalScroll>
        </section>
      )}

      {/* Sub-categories — horizontal scroll */}
      {subs.length > 0 && (
        <section className="container-page mt-8">
          <h2 className="mb-4 text-lg font-extrabold text-neutral-800">
            {t('category.shopBySubCategories')}
          </h2>
          <HorizontalScroll>
            {subs.map((sub) => (
              <CategoryCard
                key={sub.slug}
                to={`/subcategory/${sub.slug}`}
                image={sub.image}
                name={tSubCategory(sub.slug)}
              />
            ))}
          </HorizontalScroll>
        </section>
      )}

      {/* Brands — horizontal scroll, multi-select */}
      {brandList.length > 0 && (
        <section className="container-page mt-8">
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

      {/* Filters + sort */}
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

            {/* Active filter label */}
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
            {t('category.noProducts')}
          </p>
        )}
      </section>
    </div>
  );
}
