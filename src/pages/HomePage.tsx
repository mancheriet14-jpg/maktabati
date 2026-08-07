// Home page: hero slider → category grid → per-category product sections.
// Each category section shows ALL products split into two independent rows.

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroSlider from '@/components/home/HeroSlider';
import CategoryGrid from '@/components/home/CategoryGrid';
import CategoryProductSection from '@/components/home/CategoryProductSection';
import ProductCarousel from '@/components/home/ProductCarousel';
import SectionTitle from '@/components/ui/SectionTitle';
import { mainCategories } from '@/data/siteData';
import { tMainCategory } from '@/lib/i18nData';
import { productsByCategory, offerProducts } from '@/data/products';

export default function HomePage() {
  const { t } = useTranslation();
  const offers = offerProducts();

  return (
    <div className="space-y-10 py-6">
      <HeroSlider />

      <CategoryGrid />

      {/* Offers section (auto-populated from highest discounts) */}
      {offers.length > 0 && (
        <section className="container-page">
          <SectionTitle title={t('home.offersSection')} viewAllTo="/offers" titleTo="/offers" />
          <ProductCarousel products={offers} />
        </section>
      )}

      {/* Per-category sections — all products, two independent rows */}
      {mainCategories.map((cat) => {
        const items = productsByCategory(cat.slug);
        if (items.length === 0) return null;
        return (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <CategoryProductSection
              title={tMainCategory(cat.slug)}
              viewAllTo={`/category/${cat.slug}`}
              products={items}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
