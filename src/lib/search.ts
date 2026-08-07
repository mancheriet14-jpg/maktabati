// Comprehensive search across all site data: products, categories,
// sub-categories, brands, and variant names. Searches using the translated
// values for the current language so results match what the user sees.
// Results are ranked by relevance and de-duplicated.

import type { Product, MainCategorySlug } from '@/types';
import { products, productsByCategory, productsBySubCategory, productsByBrand } from '@/data/products';
import { mainCategories, subCategories, brands, findSubCategory } from '@/data/siteData';
import {
  tMainCategory,
  tSubCategory,
  tBrand,
  tProductName,
  tProductDescription,
  tVariantName,
} from '@/lib/i18nData';

export type SearchResultType = 'product' | 'category' | 'subcategory' | 'brand';

export interface SearchResult {
  type: SearchResultType;
  product?: Product;
  categorySlug?: MainCategorySlug;
  subSlug?: string;
  brandSlug?: string;
  /** The translated display label shown in the dropdown */
  label: string;
  /** Secondary text (e.g. category name for a product) */
  subLabel?: string;
  image?: string;
  price?: number;
  score: number;
}

/** Normalise a string for case-insensitive, trimmed comparison. */
function norm(s: string): string {
  return s.trim().toLowerCase();
}

/**
 * Search the entire site data and return ranked, de-duplicated results.
 * When `limit` is provided, only the top-N results are returned (for the
 * live dropdown). Without a limit, all matching products are returned
 * (for the search page).
 */
export function searchAll(query: string, limit?: number): SearchResult[] {
  const q = norm(query);
  if (!q) return [];

  const results: SearchResult[] = [];
  const seenProductIds = new Set<string>();

  // ── Main categories ──────────────────────────────────────────────
  for (const cat of mainCategories) {
    const name = norm(tMainCategory(cat.slug));
    let score = 0;
    if (name === q) score = 100;
    else if (name.startsWith(q)) score = 80;
    else if (name.includes(q)) score = 60;
    if (score > 0) {
      results.push({
        type: 'category',
        categorySlug: cat.slug,
        label: tMainCategory(cat.slug),
        image: cat.image,
        score,
      });
    }
  }

  // ── Sub-categories ──────────────────────────────────────────────
  for (const mainSlug of Object.keys(subCategories) as MainCategorySlug[]) {
    for (const sub of subCategories[mainSlug]) {
      const name = norm(tSubCategory(sub.slug));
      let score = 0;
      if (name === q) score = 95;
      else if (name.startsWith(q)) score = 75;
      else if (name.includes(q)) score = 55;
      if (score > 0) {
        results.push({
          type: 'subcategory',
          subSlug: sub.slug,
          label: tSubCategory(sub.slug),
          subLabel: tMainCategory(mainSlug),
          image: sub.image,
          score,
        });
      }
    }
  }

  // ── Brands ──────────────────────────────────────────────────────
  const brandSlugs = new Set<string>();
  for (const mainSlug of Object.keys(brands) as MainCategorySlug[]) {
    for (const brand of brands[mainSlug]) {
      if (brandSlugs.has(brand.slug)) continue;
      brandSlugs.add(brand.slug);
      const name = norm(tBrand(brand.slug));
      let score = 0;
      if (name === q) score = 90;
      else if (name.startsWith(q)) score = 70;
      else if (name.includes(q)) score = 50;
      if (score > 0) {
        results.push({
          type: 'brand',
          brandSlug: brand.slug,
          label: tBrand(brand.slug),
          image: brand.image,
          score,
        });
      }
    }
  }

  // ── Products (name, description, variant names) ─────────────────
  for (const p of products) {
    const name = norm(tProductName(p.id));
    const desc = norm(tProductDescription(p.id));
    let score = 0;
    if (name === q) score = 100;
    else if (name.startsWith(q)) score = 85;
    else if (name.includes(q)) score = 65;
    else if (desc.includes(q)) score = 30;

    // Variant names
    if (score === 0 && p.variants) {
      for (const v of p.variants) {
        const vName = norm(tVariantName(v.id));
        if (vName.includes(q)) {
          score = 25;
          break;
        }
      }
    }

    if (score > 0 && !seenProductIds.has(p.id)) {
      seenProductIds.add(p.id);
      results.push({
        type: 'product',
        product: p,
        label: tProductName(p.id),
        subLabel: tMainCategory(p.mainCategory),
        image: p.images[0],
        price: p.price,
        score,
      });
    }
  }

  // Sort by relevance (descending), then by name for stable ordering
  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return norm(a.label).localeCompare(norm(b.label));
  });

  if (limit) return results.slice(0, limit);
  return results;
}

/**
 * Resolve a search result into a navigation path.
 * - category → /category/<slug>
 * - subcategory → /subcategory/<slug>
 * - brand → /subcategory/<first-sub-slug-of-that-brand>
 * - product → /product/<id>
 */
export function resultPath(r: SearchResult): string {
  switch (r.type) {
    case 'category':
      return `/category/${r.categorySlug}`;
    case 'subcategory':
      return `/subcategory/${r.subSlug}`;
    case 'brand': {
      // Find the first sub-category that contains this brand, then
      // navigate there — the sub-category page has a brand filter.
      for (const mainSlug of Object.keys(brands) as MainCategorySlug[]) {
        const found = brands[mainSlug].find((b) => b.slug === r.brandSlug);
        if (found) {
          // Find the first sub-category under this main category that
          // has products from this brand.
          const subs = subCategories[mainSlug];
          for (const sub of subs) {
            const prods = productsBySubCategoryAndBrands(sub.slug, [r.brandSlug!]);
            if (prods.length > 0) return `/subcategory/${sub.slug}?brand=${r.brandSlug}`;
          }
          // Fallback: just go to the main category.
          return `/category/${mainSlug}`;
        }
      }
      return '/';
    }
    case 'product':
      return `/product/${r.product!.id}`;
    default:
      return '/';
  }
}

// Re-export for convenience so callers don't need a second import.
export { productsBySubCategoryAndBrands } from '@/data/products';
