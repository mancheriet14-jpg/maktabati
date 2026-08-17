// Editable site content: slider images, categories, sub-categories, brands.
// Change values here only — no code edits needed anywhere else.

import type { MainCategory, SubCategory, Brand, MainCategorySlug } from '@/types';

// ── Home hero slider ──────────────────────────────────────────────
// Add or remove image paths freely; the slider adapts automatically.
export const sliderImages: string[] = [

];

// ── Main categories (home grid + category pages) ───────────────────
export const mainCategories: MainCategory[] = [
  {
    slug: 'stationery',
    name: 'قرطاسية ومكتبية',
    image:
      '/img-webp/sliders/3.webp',
  },
  {
    slug: 'textbooks',
    name: 'كتب مدرسية ومراجع',
    image:
      '/img-webp/sliders/15.webp',
  },
 /*{
    slug: 'books',
    name: 'كتب',
    image:
      '/img-webp/sliders/7.webp',
  },      */
  {
    slug: 'toys',
    name: 'ألعاب',
    image:
      '/img-webp/sliders/8.webp',
  },
  {
    slug: 'gifts',
    name: 'هدايا',
    image:
      '/img-webp/sliders/9.webp',
  },
 {
    slug: 'electronics',
    name: 'إلكترونيات',
    image:
      '/img-webp/sliders/10.webp',
  },        
  {
    slug: 'aprons',
    name: 'مآزر',
    image:
      '/img-webp/sliders/11.webp',
  },
];

// ── Per-category slider images (independent from home) ──────────────
export const categorySliderImages: Record<MainCategorySlug, string[]> = {
  stationery: [
    '/img-webp/sliders/5.webp',
  //  '/img-webp/sliders/6.webp',
  ],
  textbooks: [
    'https://images.pexels.com/photos/159711/books-belt-learning-education-159711.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  books: [
    'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  toys: [
    'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  gifts: [
    'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  electronics: [
    'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1600',
    '/img-webp/sliders/12.webp',
  ],
  aprons: [
    'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
};

// ── Sub-categories per main category ───────────────────────────────
export const subCategories: Record<MainCategorySlug, SubCategory[]> = {
  stationery: [
    { slug: 'sub-stat-pencils', name: 'أقلام رصاص', image: '/img-webp/School Supplies/0.webp' },
    { slug: 'sub-stat-pens', name: 'أقلام حبر', image: '/img-webp/School Supplies/1.webp' },
    { slug: 'sub-stat-highliters', name: 'أقلام تحديد وسبورة', image: '/img-webp/School Supplies/12.webp' },
    { slug: 'sub-stat-coloring-pens', name: 'أقلام تلوين', image: '/img-webp/School Supplies/2.webp' },
    { slug: 'sub-stat-notebooks', name: 'كراسات ومذكرات', image: '/img-webp/School Supplies/4.webp' },
    { slug: 'sub-stat-pencilcases', name: 'مقلمات', image: '/img-webp/School Supplies/5.webp' },
    { slug: 'sub-stat-erasers', name: 'محايات ', image: '/img-webp/School Supplies/6.webp' },
    { slug: 'sub-stat-Sharpener', name: 'برايات ', image: '/img-webp/School Supplies/7.webp' },
    { slug: 'sub-stat-scissors', name: 'مقصات', image: '/img-webp/School Supplies/8.webp' },
    { slug: 'sub-stat-glues', name: 'صمغ ولاصق', image: '/img-webp/School Supplies/9.webp' },
    { slug: 'sub-stat-bottles', name: 'قوارير مياه', image: '/img-webp/School Supplies/10.webp' },
    { slug: 'sub-stat-drawing', name: 'أوراق رسم وطباعة', image: '/img-webp/School Supplies/11.webp' },
    { slug: 'sub-stat-geometric', name: 'أدوات هندسية', image: '/img-webp/School Supplies/13.webp' },
    // { slug: 'sub-stat-copy-papers', name: 'ورق نسخ', image: '/img-webp/School Supplies/14.webp' },
  ],
  textbooks: [
    { slug: 'primary-textbooks', name: 'ابتدائي', image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'middle-textbooks', name: 'متوسط', image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'secondary-textbooks', name: 'ثانوي', image: 'https://images.pexels.com/photos/159711/books-belt-learning-education-159711.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'references', name: 'مراجع', image: '' },
    { slug: 'other-textbooks', name: 'أخرى', image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  books: [
    { slug: 'preschool', name: 'تحضيري', image: '/img-webp/books/4.webp' },
    { slug: 'primary', name: 'ابتدائي', image: '/img-webp/books/1.webp' },
    { slug: 'intermediate', name: 'متوسط', image: '/img-webp/books/2.webp' },
    { slug: 'secondary', name: 'ثانوي', image: '/img-webp/books/3.webp' },
    { slug: 'refernces', name: 'المراجع', image: '/img-webp/books/11.webp' },
    { slug: 'mushafs', name: 'مصاحف', image: '/img-webp/books/10.webp' },
    { slug: 'religious', name: 'كتب دينية', image: '/img-webp/books/6.webp' },
    { slug: 'encyclopedias', name: 'موسوعات', image: '/img-webp/books/7.webp' },
    { slug: 'kids-stories', name: 'قصص أطفال', image: '/img-webp/books/8.webp' },
    { slug: 'other-books', name: 'أخرى', image: '/img-webp/books/9.webp' },
  ],
  toys: [
    { slug: 'educational', name: 'تعليمية', image: 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'plush', name: 'محشوة', image: 'https://images.pexels.com/photos/268840/pexels-photo-268840.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'remote-control', name: 'تحكم عن بعد', image: 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'other-toys', name: 'أخرى', image: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  gifts: [
    { slug: 'boxes', name: 'علب هدايا', image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'decor', name: 'ديكور', image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'other-gifts', name: 'أخرى', image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
    electronics: [
    { slug: 'phones', name: 'جوالات', image: '/img-webp/electronics/0.webp' },
    { slug: 'tablet', name: 'أيبادات', image: '/img-webp/electronics/9.webp' },
    { slug: 'laptops', name: 'لابتوبات', image: '/img-webp/electronics/1.webp' },
    { slug: 'headphones', name: 'سماعات', image: '/img-webp/electronics/2.webp' },
    { slug: 'watches', name: 'ساعات', image: '/img-webp/electronics/3.webp' },
    { slug: 'other-electronics', name: 'أخرى', image: '/img-webp/electronics/10.webp' },
  ], 
  aprons: [
    { slug: 'kids-aprons', name: 'مآزر أطفال', image: 'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'adult-aprons', name: 'مآزر كبار', image: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'other-aprons', name: 'أخرى', image: 'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
};

// ── Helper: find a sub-category by slug across all main categories ──
export function findSubCategory(
  subSlug: string,
): { sub: SubCategory; mainSlug: MainCategorySlug } | undefined {
  for (const key of Object.keys(subCategories) as MainCategorySlug[]) {
    const found = subCategories[key].find((s) => s.slug === subSlug);
    if (found) return { sub: found, mainSlug: key };
  }
  return undefined;
}

// ── Brands per main category ───────────────────────────────────────
export const brands: Record<MainCategorySlug, Brand[]> = {
  stationery: [
    { slug: 'tecnowa', name: 'Tecnowa', image: '/img-webp/brands/0.webp' },
    { slug: 'maped', name: 'Maped', image: '/img-webp/brands/2.webp' },
    { slug: 'vertex', name: 'Vertex', image: '/img-webp/brands/3.webp' },
    { slug: 'fabs', name: 'FABS', image: '/img-webp/brands/5.webp' },
    { slug: 'alhilal', name: 'الهلال', image: '/img-webp/brands/1.webp' },
    { slug: 'rayane', name: 'Rayane', image: '/img-webp/brands/4.webp' },
    { slug: 'other', name: 'أخرى', image: '/img-webp/brands/7.webp' },
  ],
  textbooks: [
   // { slug: 'tecnowa', name: 'Tecnowa', image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  books: [
    // { slug: 'tecnowa', name: 'Tecnowa', image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  toys: [
   // { slug: 'roku', name: 'Roku', image: 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  gifts: [
   // { slug: 'alhilal', name: 'الهلال', image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
  electronics: [
    { slug: 'apple', name: 'Apple', image: '/img-webp/electronics/5.webp' },
    { slug: 'deel', name: 'Deel', image: '/img-webp/electronics/8.webp' },
    { slug: 'xiaomi', name: 'Xiaomi', image: '/img-webp/electronics/6.webp' },
    { slug: 'asus', name: 'Asus', image: '/img-webp/electronics/7.webp' },
    { slug: 'samsung', name: 'Samsung', image: '/img-webp/electronics/4.webp' },
  ],
  aprons: [
   // { slug: 'alhilal', name: 'الهلال', image: 'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
};

// ── Bag collections (for stationery category) ──────────────────────
export interface BagCollection {
  slug: string;
  name: string;
  image: string;
}

export const bagCollections: BagCollection[] = [
  { slug: 'style', name: 'تشكيلة ستايل', image: '/img-webp/collection/0.webp' },
  { slug: 'sports', name: 'التشكيلة الرياضية', image: '/img-webp/collection/1.webp' },
  { slug: 'fantasy', name: 'تشكيلات الشخصيات الخيالية', image: '/img-webp/collection/2.webp' },
  { slug: 'heroes', name: 'تشكيلة الأبطال', image: '/img-webp/collection/3.webp' },
  { slug: 'kindergarten', name: 'تشكيلة رياض الأطفال', image: '/img-webp/collection/4.webp' },
  { slug: 'wheeled', name: 'تشكيلة حقائب  ظهر بعجلات', image: '/img-webp/collection/5.webp' },
  { slug: 'full-set', name: 'تشكيلة المجموعة الكاملة', image: '/img-webp/collection/6.webp' },
  { slug: 'all', name: 'الكل', image: '/img-webp/collection/7.webp' },

];
