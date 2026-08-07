// Reusable horizontal scroll container with hidden scrollbar.
// Supports touch drag, mouse wheel, and mouse drag on desktop.
// Renders children in a single non-wrapping row.

import { useRef, type ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft = scrollRef.current?.scrollLeft ?? 0;
  };

  const handleMouseLeave = () => { isDown = false; };
  const handleMouseUp = () => { isDown = false; };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
      className={`no-scrollbar flex gap-3 overflow-x-auto scroll-smooth ${className}`}
      style={{ cursor: 'grab' }}
    >
      {children}
    </div>
  );
}
