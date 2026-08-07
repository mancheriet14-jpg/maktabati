// Translation helpers for data entities (categories, products, variants,
// wilayas, etc.) whose source values are hardcoded in data files.
// Each helper looks up the current language via i18next and returns the
// translated value, falling back to the original Arabic name from the data
// file when a translation key is missing — so users never see a raw key.

import i18n from '@/i18n';
import type { MainCategorySlug } from '@/types';
import { mainCategories, subCategories, brands, bagCollections, findSubCategory } from '@/data/siteData';
import { products, findVariant } from '@/data/products';

type Lang = 'ar' | 'fr' | 'en';

function lang(): Lang {
  return (i18n.language as Lang) || 'ar';
}

function fallback(key: string, value?: string): string {
  return value ?? key;
}

/** Translate a main category name by slug. */
export function tMainCategory(slug: MainCategorySlug): string {
  const key = `data.mainCategory.${slug}`;
  const t = i18n.t(key);
  if (t === key) {
    const cat = mainCategories.find((c) => c.slug === slug);
    return fallback(key, cat?.name);
  }
  return t;
}

/** Translate a sub-category name by slug. */
export function tSubCategory(slug: string): string {
  const key = `data.subCategory.${slug}`;
  const t = i18n.t(key);
  if (t === key) {
    const info = findSubCategory(slug);
    return fallback(key, info?.sub.name);
  }
  return t;
}

/** Translate a brand name by slug. */
export function tBrand(slug: string): string {
  const key = `data.brand.${slug}`;
  const t = i18n.t(key);
  if (t === key) {
    for (const cat of Object.keys(brands) as MainCategorySlug[]) {
      const b = brands[cat].find((br) => br.slug === slug);
      if (b) return fallback(key, b.name);
    }
  }
  return t;
}

/** Translate a bag collection name by slug. */
export function tBagCollection(slug: string): string {
  const key = `data.bagCollection.${slug}`;
  const t = i18n.t(key);
  if (t === key) {
    const col = bagCollections.find((c) => c.slug === slug);
    return fallback(key, col?.name);
  }
  return t;
}

/** Translate a product name by id. */
export function tProductName(id: string): string {
  const key = `data.product.${id}.name`;
  const t = i18n.t(key);
  if (t === key) {
    const p = products.find((pr) => pr.id === id);
    return fallback(key, p?.name);
  }
  return t;
}

/** Translate a product description by id. */
export function tProductDescription(id: string): string {
  const key = `data.product.${id}.description`;
  const t = i18n.t(key);
  if (t === key) {
    const p = products.find((pr) => pr.id === id);
    return fallback(key, p?.description);
  }
  return t;
}

/** Translate a product's specs (label + value) by id. */
export function tProductSpecs(
  id: string,
  specs: { label: string; value: string }[],
): { label: string; value: string }[] {
  return specs.map((spec, i) => ({
    label: i18n.t(`data.spec.${id}.${i}.label`, { defaultValue: spec.label }),
    value: i18n.t(`data.spec.${id}.${i}.value`, { defaultValue: spec.value }),
  }));
}

/** Translate a variant name by variant id. */
export function tVariantName(id: string): string {
  const key = `data.variant.${id}.name`;
  const t = i18n.t(key);
  if (t === key) {
    const v = findVariant(id);
    return fallback(key, v?.name);
  }
  return t;
}

/** Translate a variant option label by variant id. */
export function tVariantOptionLabel(id: string): string {
  const key = `data.variant.${id}.optionLabel`;
  const t = i18n.t(key);
  if (t === key) {
    const v = findVariant(id);
    return fallback(key, v?.optionLabel);
  }
  return t;
}

/** Translate a wilaya name. The Arabic name is the internal identifier;
 *  the display name changes with the current language. */
export function tWilaya(arName: string): string {
  const l = lang();
  if (l === 'ar') return arName;
  return i18n.t(`data.wilaya.${arName}`, { defaultValue: arName });
}

/** Locale code for date formatting based on current language. */
export function dateLocale(): string {
  const l = lang();
  return l === 'ar' ? 'ar-DZ' : l === 'fr' ? 'fr-DZ' : 'en-US';
}
