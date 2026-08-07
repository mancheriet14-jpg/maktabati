// i18n setup with react-i18next. Supports Arabic (default), French, and English.
// Language preference is persisted in localStorage and applied to <html dir/lang>.

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import en from './locales/en.json';

export type AppLanguage = 'ar' | 'fr' | 'en';
export const LANGUAGES: { code: AppLanguage; label: string; dir: 'rtl' | 'ltr' }[] = [
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
];

const STORAGE_KEY = 'app-lang';

function getInitialLanguage(): AppLanguage {
  const saved = localStorage.getItem(STORAGE_KEY) as AppLanguage | null;
  if (saved && LANGUAGES.some((l) => l.code === saved)) return saved;
  return 'ar';
}

function applyDir(lang: AppLanguage) {
  const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? 'rtl';
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
}

const initialLang = getInitialLanguage();
applyDir(initialLang);

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: initialLang,
  fallbackLng: 'ar',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng: AppLanguage) => {
  localStorage.setItem(STORAGE_KEY, lng);
  applyDir(lng);
});

export default i18n;
