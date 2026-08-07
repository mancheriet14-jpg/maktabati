// Reusable promo slider for category pages. Displays full-bleed images that
// link to products. Same Swiper config as the main category slider
// (autoplay, fade, draggable, responsive) but shows images only — no title.

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import type { PromoSlide } from '@/data/categoryPromoSlides';

const sliderConfig: SwiperOptions = {
  modules: [Autoplay, Pagination, EffectFade],
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: { clickable: true },
  effect: 'fade',
  fadeEffect: { crossFade: true },
};

interface Props {
  slides: PromoSlide[];
}

export default function CategoryPromoSlider({ slides }: Props) {
  const navigate = useNavigate();

  if (!slides || slides.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-3xl shadow-card">
      <Swiper {...sliderConfig} className="h-[180px] sm:h-[280px] lg:h-[360px]">
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <button
              type="button"
              onClick={() => navigate(`/product/${slide.productId}`)}
              className="h-full w-full cursor-pointer"
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
