// Editable site content: slider images, categories, sub-categories, brands.
// Change values here only — no code edits needed anywhere else.

import type { MainCategory, SubCategory, Brand, MainCategorySlug } from '@/types';

// ── Home hero slider ──────────────────────────────────────────────
// Add or remove image paths freely; the slider adapts automatically.
export const sliderImages: string[] = [
  'https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2305444/pexels-photo-2305444.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

// ── Main categories (home grid + category pages) ───────────────────
export const mainCategories: MainCategory[] = [
  {
    slug: 'stationery',
    name: 'قرطاسية ومكتبية',
    image:
      '/img/sliders/3.jpg',
  },
  {
    slug: 'textbooks',
    name: 'كتب مدرسية ومراجع',
    image:
      '/img/sliders/15.jpg',
  },
 /* {
    slug: 'books',
    name: 'كتب',
    image:
      '/img/sliders/7.jpg',
  },       */
  {
    slug: 'toys',
    name: 'ألعاب',
    image:
      '/img/sliders/8.jpg',
  },
  {
    slug: 'gifts',
    name: 'هدايا',
    image:
      '/img/sliders/9.jpg',
  },
 {
    slug: 'electronics',
    name: 'إلكترونيات',
    image:
      '/img/sliders/10.jpg',
  },        
  {
    slug: 'aprons',
    name: 'مآزر',
    image:
      '/img/sliders/11.jpg',
  },
];

// ── Per-category slider images (independent from home) ──────────────
export const categorySliderImages: Record<MainCategorySlug, string[]> = {
  stationery: [
    '/img/sliders/5.png',
    '/img/sliders/6.png',
  ],
  textbooks: [
    'https://images.pexels.com/photos/159711/books-belt-learning-education-159711.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  books: [
    'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  toys: [
    'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/268840/pexels-photo-268840.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  gifts: [
    'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
  electronics: [
    'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1600',
    '/img/sliders/12.png',
  ],
  aprons: [
    'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ],
};

// ── Sub-categories per main category ───────────────────────────────
export const subCategories: Record<MainCategorySlug, SubCategory[]> = {
  stationery: [
    { slug: 'sub-stat-pencils', name: 'أقلام رصاص', image: '/img/School Supplies/0.jpg' },
    { slug: 'sub-stat-pens', name: 'أقلام حبر', image: '/img/School Supplies/1.jpg' },
    { slug: 'sub-stat-highliters', name: 'أقلام تحديد وسبورة', image: '/img/School Supplies/12.jpg' },
    { slug: 'sub-stat-coloring-pens', name: 'أقلام تلوين', image: '/img/School Supplies/2.jpg' },
    { slug: 'sub-stat-notebooks', name: 'كراسات ومذكرات', image: '/img/School Supplies/4.jpg' },
    { slug: 'sub-stat-pencilcases', name: 'مقلمات', image: '/img/School Supplies/5.jpg' },
    { slug: 'sub-stat-erasers', name: 'محايات ', image: '/img/School Supplies/6.jpg' },
    { slug: 'sub-stat-Sharpener', name: 'برايات ', image: '/img/School Supplies/7.jpg' },
    { slug: 'sub-stat-scissors', name: 'مقصات', image: '/img/School Supplies/8.jpg' },
    { slug: 'sub-stat-glues', name: 'صمغ ولاصق', image: '/img/School Supplies/9.jpg' },
    { slug: 'sub-stat-bottles', name: 'قوارير مياه', image: '/img/School Supplies/10.jpg' },
    { slug: 'sub-stat-drawing', name: 'أوراق رسم وطباعة', image: '/img/School Supplies/11.jpg' },
    { slug: 'sub-stat-geometric', name: 'أدوات هندسية', image: '/img/School Supplies/13.jpg' },
    // { slug: 'sub-stat-copy-papers', name: 'ورق نسخ', image: '/img/School Supplies/14.jpg' },
  ],
  textbooks: [
    { slug: 'primary-textbooks', name: 'ابتدائي', image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'middle-textbooks', name: 'متوسط', image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'secondary-textbooks', name: 'ثانوي', image: 'https://images.pexels.com/photos/159711/books-belt-learning-education-159711.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { slug: 'references', name: 'مراجع', image: '' },
    { slug: 'other-textbooks', name: 'أخرى', image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  books: [
    { slug: 'preschool', name: 'تحضيري', image: '/img/books/4.jpg' },
    { slug: 'primary', name: 'ابتدائي', image: '/img/books/1.jpg' },
    { slug: 'intermediate', name: 'متوسط', image: '/img/books/2.jpg' },
    { slug: 'secondary', name: 'ثانوي', image: '/img/books/3.jpg' },
    { slug: 'refernces', name: 'المراجع', image: '/img/books/11.jpg' },
    { slug: 'mushafs', name: 'مصاحف', image: '/img/books/10.jpg' },
    { slug: 'religious', name: 'كتب دينية', image: '/img/books/6.jpg' },
    { slug: 'encyclopedias', name: 'موسوعات', image: '/img/books/7.jpg' },
    { slug: 'kids-stories', name: 'قصص أطفال', image: '/img/books/8.jpg' },
    { slug: 'other-books', name: 'أخرى', image: '/img/books/9.jpg' },
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
    { slug: 'phones', name: 'جوالات', image: '/img/electronics/0.jpg' },
    { slug: 'tablet', name: 'أيبادات', image: '/img/electronics/9.jpg' },
    { slug: 'laptops', name: 'لابتوبات', image: '/img/electronics/1.png' },
    { slug: 'headphones', name: 'سماعات', image: '/img/electronics/2.jpg' },
    { slug: 'watches', name: 'ساعات', image: '/img/electronics/3.png' },
    { slug: 'other-electronics', name: 'أخرى', image: '/img/electronics/10.jpg' },
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
    { slug: 'tecnowa', name: 'Tecnowa', image: '/img/brands/0.jpg' },
    { slug: 'maped', name: 'Maped', image: '/img/brands/2.jpg' },
    { slug: 'vertex', name: 'Vertex', image: '/img/brands/3.jpg' },
    { slug: 'fabs', name: 'FABS', image: '/img/brands/5.jpg' },
    { slug: 'alhilal', name: 'الهلال', image: '/img/brands/1.jpg' },
    { slug: 'rayane', name: 'Rayane', image: '/img/brands/4.jpg' },
    { slug: 'other', name: 'أخرى', image: '/img/brands/7.jpg' },
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
    { slug: 'apple', name: 'Apple', image: '/img/electronics/5.jpg' },
    { slug: 'deel', name: 'Deel', image: '/img/electronics/8.png' },
    { slug: 'xiaomi', name: 'Xiaomi', image: '/img/electronics/6.jpg' },
    { slug: 'asus', name: 'Asus', image: '/img/electronics/7.png' },
    { slug: 'samsung', name: 'Samsung', image: '/img/electronics/4.jpg' },
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
  { slug: 'style', name: 'تشكيلة ستايل', image: '/img/collection/0.png' },
  { slug: 'sports', name: 'التشكيلة الرياضية', image: '/img/collection/1.png' },
  { slug: 'fantasy', name: 'تشكيلات الشخصيات الخيالية', image: '/img/collection/2.png' },
  { slug: 'heroes', name: 'تشكيلة الأبطال', image: '/img/collection/3.png' },
  { slug: 'kindergarten', name: 'تشكيلة رياض الأطفال', image: '/img/collection/4.png' },
  { slug: 'wheeled', name: 'تشكيلة حقائب  ظهر بعجلات', image: '/img/collection/5.jpg' },
  { slug: 'full-set', name: 'تشكيلة المجموعة الكاملة', image: '/img/collection/6.png' },
  { slug: 'all', name: 'الكل', image: '/img/collection/7.jpg' },

];
