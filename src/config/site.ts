// Centralized site configuration.
// Supabase credentials are read from Vite env vars so they can be set in .env
// without touching any code. Phase 2 will activate the actual Supabase client.

import i18n from '@/i18n';

export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL ?? '',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
};

export const siteConfig = {
  name: 'مكتبتي',
  get tagline() {
    return i18n.t('site.tagline');
  },
  get currency() {
    return i18n.t('site.currency');
  },
  // Free-shipping threshold for future use
  freeShippingThreshold: 200,
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61592417535366',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    email: 'maktabati.store.dz@gmail.com',
  },
};

// Format a number as Algerian Dinar using locale-aware grouping, e.g. 1500 -> "1,500 DA".
export function formatPrice(value: number | null | undefined): string {
  if (value === null || value === undefined) return i18n.t('site.unspecified');
  const locale = i18n.language === 'ar' ? 'ar-DZ' : i18n.language === 'fr' ? 'fr-DZ' : 'en-US';
  return `${new Intl.NumberFormat(locale).format(value)} ${siteConfig.currency}`;
}
