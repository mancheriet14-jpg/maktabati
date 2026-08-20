// Floating cart: draggable, shows item count badge, navigates to /cart on click.
// Appears when cart has items, hides when empty or closed by user.
// Reappears at the default position (bottom-right) when a new item is added.
// Plays a short sound when an item is added successfully.

import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const HIDDEN_KEY = 'floating-cart-hidden';
const BUTTON_SIZE = 80;
const EDGE_MARGIN = 20;

interface Position { x: number; y: number; }

function clampToViewport(pos: Position): Position {
  const maxX = window.innerWidth - BUTTON_SIZE;
  const maxY = window.innerHeight - BUTTON_SIZE;
  return {
    x: Math.max(EDGE_MARGIN, Math.min(pos.x, Math.max(EDGE_MARGIN, maxX))),
    y: Math.max(EDGE_MARGIN, Math.min(pos.y, Math.max(EDGE_MARGIN, maxY))),
  };
}

function getDefaultPosition(): Position {
  return {
    x: window.innerWidth - BUTTON_SIZE - EDGE_MARGIN,
    y: window.innerHeight - BUTTON_SIZE - EDGE_MARGIN - 40,
  };
}

function playAddSound() {
  try {
    const audio = new Audio('/sounds/add-to-cart.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => { /* file may not exist yet */ });
  } catch {
    /* silently ignore */
  }
}

export default function FloatingCart() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const totalItems = useCartStore((s) => s.totalItems());

  const [position, setPosition] = useState<Position>(() =>
    typeof window !== 'undefined' ? getDefaultPosition() : { x: 0, y: 0 },
  );
  const [hidden, setHidden] = useState<boolean>(() => {
    try { return localStorage.getItem(HIDDEN_KEY) === 'true'; } catch { return false; }
  });
  const [dragging, setDragging] = useState(false);

  const dragStart = useRef<{ mouseX: number; mouseY: number; posX: number; posY: number } | null>(null);
  const hasMoved = useRef(false);
  const prevTotal = useRef(totalItems);

  // Reappear and play sound when a new item is added
  useEffect(() => {
    if (totalItems > prevTotal.current) {
      playAddSound();
      if (hidden) {
        setHidden(false);
        try { localStorage.setItem(HIDDEN_KEY, 'false'); } catch { /* ignore */ }
        setPosition(getDefaultPosition());
      } else if (prevTotal.current === 0) {
        setPosition(getDefaultPosition());
      }
    }
    prevTotal.current = totalItems;
  }, [totalItems, hidden]);

  // Re-clamp position on viewport resize
  useEffect(() => {
    const onResize = () => setPosition((p) => clampToViewport(p));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent text selection while dragging (without toggling overflow,
  // which would hide the scrollbar and cause the page to shift/jitter)
  useEffect(() => {
    if (dragging) {
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }
    return () => {
      document.body.style.userSelect = '';
    };
  }, [dragging]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    hasMoved.current = false;
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
  }, [position]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.mouseX;
    const dy = e.clientY - dragStart.current.mouseY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasMoved.current = true;
    setPosition(clampToViewport({
      x: dragStart.current.posX + dx,
      y: dragStart.current.posY + dy,
    }));
  }, [dragging]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setDragging(false);
    if (!hasMoved.current) navigate('/cart');
    dragStart.current = null;
  }, [dragging, navigate]);

  const handleClose = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setHidden(true);
    try { localStorage.setItem(HIDDEN_KEY, 'true'); } catch { /* ignore */ }
  };

  const visible = totalItems > 0 && !hidden;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.4 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            zIndex: 60,
            touchAction: 'none',
            userSelect: 'none',
          }}
          className="flex flex-col items-center"
        >
          {/* Close button — positioned above the cart, on the left side */}
          <button
            onPointerDown={handleClose}
            className="absolute -top-8 left-0 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-error-500 text-white shadow-md transition hover:bg-error-600"
            aria-label={t('common.cancel')}
          >
            <X className="h-4 w-4" />
          </button>

          {/* Cart button — draggable + clickable */}
          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className={`relative flex cursor-pointer items-center justify-center rounded-full border border-primary-100 bg-white shadow-card transition ${
              dragging ? 'scale-105 shadow-float' : 'hover:bg-neutral-50'
            }`}
            style={{ width: BUTTON_SIZE, height: BUTTON_SIZE }}
          >
            <ShoppingCart className="h-10 w-10 text-primary-700" />
            <motion.span
              key={totalItems}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 flex h-7 min-w-7 items-center justify-center rounded-full bg-primary-600 px-1.5 text-sm font-bold text-white shadow"
            >
              {totalItems}
            </motion.span>
          </div>

          {/* Label */}
          <span className="mt-1.5 rounded-full bg-primary-600 px-3 py-0.5 text-sm font-bold text-white shadow-soft">
            {t('common.cart')}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
