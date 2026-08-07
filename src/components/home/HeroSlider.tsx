// Full-width hero slider using Swiper.
// Images + product links come from `homePromoSlides` in categoryPromoSlides.ts —
// edit that array to change slides. No other files need editing.

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { homePromoSlides } from '@/data/categoryPromoSlides';

const swiperConfig: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: { clickable: true },
  navigation: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
};

export default function HeroSlider() {
  const navigate = useNavigate();
  return (
    <section className="container-page">
      <div className="overflow-hidden rounded-3xl shadow-card">
        <Swiper {...swiperConfig} className="h-[220px] sm:h-[340px] lg:h-[440px]">
          {homePromoSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <button
                type="button"
                onClick={() => navigate(`/product/${slide.productId}`)}
                className="h-full w-full cursor-pointer"
              >
                <div className="relative h-full w-full">
                  <img
                    src={slide.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent" />
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
