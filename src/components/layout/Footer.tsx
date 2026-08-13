// Footer with brand, social links, quick links, and categories.
// Social links are configured in siteConfig.

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Store, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { mainCategories } from '@/data/siteData';
import { siteConfig } from '@/config/site';
import { tMainCategory } from '@/lib/i18nData';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-20 bg-neutral-900 text-neutral-300">
      <div className="container-page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + social */}
          <div>


          <div className="flex items-center gap-2">
            <img
              src="/img-webp/sliders/footer.webp"
              alt={siteConfig.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <span className="text-lg font-extrabold text-white">
              {siteConfig.name}
            </span>
          </div>


            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {siteConfig.tagline} — {t('footer.taglineSuffix')}
            </p>

            {/* Social links */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition hover:bg-primary-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition hover:bg-primary-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition hover:bg-primary-600 hover:text-white"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.email}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition hover:bg-primary-600 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-white">{t('footer.categories')}</h3>
            <ul className="space-y-2 text-sm">
              {mainCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-neutral-400 transition hover:text-primary-400"
                  >
                    {tMainCategory(cat.slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-neutral-400 transition hover:text-primary-400">
                  {t('common.home')}
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-neutral-400 transition hover:text-primary-400">
                  {t('common.offers')}
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-neutral-400 transition hover:text-primary-400">
                  {t('common.wishlist')}
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-neutral-400 transition hover:text-primary-400">
                  {t('common.cart')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-white">{t('footer.contactUs')}</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> maktabati.store.dz@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />213773618066+
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {t('footer.algeria')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {siteConfig.name} — {t('footer.rights')}
      </div>
    </footer>
  );
}
