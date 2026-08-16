// Home page: hero slider → category grid → per-category product sections.
// Each category section shows ALL products split into two independent rows.

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSeo, SITE_DOMAIN } from '@/lib/seo';
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

  useSeo({
    title: 'مكتبتي | متجر القرطاسية والحقائب والكتب في الجزائر',
    description: 'مكتبتي متجر إلكتروني للقرطاسية والحقائب والكتب والأدوات المدرسية في الجزائر، مع توصيل إلى جميع الولايات.',
    path: '/',
    image: `${SITE_DOMAIN}/img-webp/sliders/logo.webp`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'OnlineStore',
      name: 'مكتبتي',
      url: SITE_DOMAIN,
      description: 'متجر إلكتروني للقرطاسية والحقائب والكتب والأدوات المدرسية في الجزائر.',
      image: `${SITE_DOMAIN}/img-webp/sliders/logo.webp`,
      email: 'maktabati.store.dz@gmail.com',
      telephone: '+213773618066',
      address: { '@type': 'PostalAddress', addressCountry: 'DZ' },
      sameAs: ['https://www.facebook.com/profile.php?id=61592417535366'],
    },
  });

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
