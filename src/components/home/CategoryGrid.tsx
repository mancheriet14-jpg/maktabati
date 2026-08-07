// Grid of main category cards on the home page.
// Uses large square images with divider and name below.

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { mainCategories } from '@/data/siteData';
import { tMainCategory } from '@/lib/i18nData';

export default function CategoryGrid() {
  const { t } = useTranslation();
  return (
    <section className="container-page">
      <div className="mb-6 flex items-center justify-center gap-2 sm:gap-3">
        <div className="hidden items-end gap-1.5 sm:flex">
          <span className="block h-1 w-6 rounded-full bg-primary-500" />
          <span className="block h-1 w-8 rounded-full bg-accent-500" />
          <span className="block h-1 w-10 rounded-full bg-success-500" />
        </div>
        <h2 className="text-center text-2xl font-extrabold leading-tight text-neutral-800">
          {t('home.shopByCategories')}
        </h2>
        <div className="hidden items-end gap-1.5 sm:flex">
          <span className="block h-1 w-10 rounded-full bg-success-500" />
          <span className="block h-1 w-8 rounded-full bg-accent-500" />
          <span className="block h-1 w-6 rounded-full bg-primary-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {mainCategories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/category/${cat.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white text-center shadow-soft transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-card"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-50">
                <img
                  src={cat.image}
                  alt={tMainCategory(cat.slug)}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="border-t border-neutral-100 px-2 py-2.5">
                <span className="text-sm font-bold text-neutral-700">
                  {tMainCategory(cat.slug)}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
