// Horizontal single-row product carousel using Swiper.
// Drag/swipe/touch only — no navigation arrows.

import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import 'swiper/css';

import type { Product } from '@/types';
import ProductCard from '@/components/ui/ProductCard';

const swiperConfig: SwiperOptions = {
  slidesPerView: 2,
  spaceBetween: 12,
  breakpoints: {
    640: { slidesPerView: 3, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 16 },
    1280: { slidesPerView: 5, spaceBetween: 20 },
  },
};

export default function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <div className="pb-2">
      <Swiper {...swiperConfig} className="!pb-2">
        {products.map((p) => (
          <SwiperSlide key={p.id} className="!h-auto">
            <div className="h-full">
              <ProductCard product={p} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
