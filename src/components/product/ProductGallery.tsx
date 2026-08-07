// Product image gallery: large main image with swipe/drag navigation and a
// horizontal Swiper thumbnail strip below. Clicking the main image opens a
// lightbox modal with full navigation (arrows, thumbnails, keyboard).

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperClass } from 'swiper/react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

import 'swiper/css';

interface GalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: GalleryProps) {
  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // Track whether a drag just happened so we don't open the lightbox on click
  // after a swipe.
  const dragHappened = useRef(false);

  const safeActive = images.length > 0 ? Math.min(active, images.length - 1) : 0;
  const currentImage = images[safeActive] ?? '';

  const handleThumbClick = (index: number) => {
    setActive(index);
    swiper?.slideTo(index);
  };

  const goTo = useCallback(
    (index: number) => {
      setActive(index);
      swiper?.slideTo(index);
    },
    [swiper],
  );

  const nextImage = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keep thumbnail Swiper in sync with the active index.
  useEffect(() => {
    swiper?.slideTo(safeActive);
  }, [safeActive, swiper]);

  // Swipe / drag handler for the main image.
  // Swiping right (offset.x > 0) goes to the next image,
  // swiping left (offset.x < 0) goes to the previous image.
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      nextImage();
    } else if (info.offset.x < -threshold) {
      prevImage();
    }
    // Mark that a drag happened so the click handler can suppress the
    // lightbox open.
    if (Math.abs(info.offset.x) > 10 || Math.abs(info.offset.y) > 10) {
      dragHappened.current = true;
      // Reset after a short delay so subsequent genuine clicks work.
      setTimeout(() => {
        dragHappened.current = false;
      }, 100);
    }
  };

  const handleMainClick = () => {
    if (dragHappened.current) return;
    setLightboxOpen(true);
  };

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <>
      <div className="flex w-full flex-col gap-3">
        {/* Main image — swipe/drag to navigate, click to open lightbox.
            Scaled to 95% so the frame matches the image exactly. */}
        <div className="mx-auto w-[95%]">
          <div
            className="relative w-full aspect-square overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50 shadow-soft cursor-grab active:cursor-grabbing"
            onClick={handleMainClick}
          >
          <AnimatePresence mode="wait">
            <motion.img
              key={safeActive}
              src={currentImage}
              alt={name}
              drag={images.length > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full w-full object-cover select-none"
              draggable={false}
            />
          </AnimatePresence>
        </div>
        </div>

        {/* Horizontal thumbnail gallery (Swiper) */}
        {images.length > 1 && (
          <div className="overflow-hidden">
            <Swiper
              slidesPerView={4}
              spaceBetween={8}
              onSwiper={setSwiper}
              breakpoints={{
                640: { slidesPerView: 5, spaceBetween: 10 },
                1024: { slidesPerView: 6, spaceBetween: 12 },
              }}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <button
                    onClick={() => handleThumbClick(i)}
                    className={`relative h-16 w-full overflow-hidden rounded-xl border-2 transition sm:h-20 ${
                      i === safeActive
                        ? 'border-primary-600 ring-2 ring-primary-100'
                        : 'border-neutral-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${name} ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Main lightbox image */}
            <motion.img
              key={safeActive}
              src={currentImage}
              alt={name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain"
            />

            {/* Thumbnails in lightbox */}
            {images.length > 1 && (
              <div
                className="absolute bottom-4 flex gap-2 overflow-x-auto no-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                      i === safeActive ? 'border-primary-500' : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${name} ${i + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
