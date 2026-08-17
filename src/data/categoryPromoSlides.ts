// Promo slider data for main category pages.
// To edit the promo images or link them to different products, just change
// the `image` URL or `productId` in this file — no other files need editing.

import type { MainCategorySlug } from '@/types';

export interface PromoSlide {
  image: string;
  productId: string;
}

// ── Home page hero slider ─────────────────────────────────────────
// Edit this array to change the main slider on the home page.
export const homePromoSlides: PromoSlide[] = [
  { image: '/img-webp/sliders/20.webp', productId: 'st-25' },
//  { image: '/img-webp/sliders/22.webp', productId: 'st-83' },
//  { image: '/img-webp/sliders/23.webp', productId: 'st-221' },
];

export const categoryPromoSlides: Partial<Record<MainCategorySlug, PromoSlide[]>> = {
  stationery: [
    { image: '/img-webp/sliders/13.webp', productId: 'st-1.1' },
    { image: '/img-webp/sliders/14.webp', productId: 'st-2' },
  ],
  textbooks: [
    { image: '', productId: 'bk-1' },

  ],
  /* books: [
    { image: 'https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'bk-1' },
  ], */
  gifts: [
    { image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'gf-1' },
    { image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'gf-2' },
  ],
  toys: [
    { image: 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'ty-1' },
    { image: 'https://images.pexels.com/photos/268840/pexels-photo-268840.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'ty-2' },
  ],
  electronics: [
    { image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'el-1' },
    { image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'el-3' },
  ],
  aprons: [
    { image: 'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'ap-1' },
    { image: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=1600', productId: 'ap-2' },
  ],
};
