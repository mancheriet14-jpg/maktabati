// Main layout: sticky header, routed page content, footer.
// Restores scroll position when navigating back to a previously visited page.

import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { scrollPositions } from '@/lib/scrollStore';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

export default function Layout() {
  const { pathname } = useLocation();
  const prevPath = useRef<string | null>(null);
  const restored = useRef(false);
  // The latest known scroll position, updated on every scroll event.
  const lastScrollY = useRef(0);

  // Save scroll position before any navigation-triggering click. We use a
  // capture-phase click listener so it fires before the app's click handlers
  // call navigate(). This captures the position before any click-induced
  // scroll can change it.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (restored.current) {
        scrollPositions.set(pathname, lastScrollY.current);
        restored.current = false;
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [pathname]);

  // Track scroll position continuously in a ref.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      lastScrollY.current = window.scrollY;
      if (ticking || !restored.current) return;
      ticking = true;
      requestAnimationFrame(() => {
        scrollPositions.set(pathname, window.scrollY);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Restore scroll position on navigation.
  useEffect(() => {
    const prev = prevPath.current;
    if (prev === null) {
      prevPath.current = pathname;
      restored.current = true;
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    if (prev !== pathname) {
      prevPath.current = pathname;
      restored.current = false;
      const saved = scrollPositions.get(pathname) ?? 0; // from shared store
      const apply = () => {
        window.scrollTo({ top: saved, behavior: 'instant' as ScrollBehavior });
      };
      requestAnimationFrame(() => {
        requestAnimationFrame(apply);
        setTimeout(apply, 80);
        setTimeout(apply, 220);
        setTimeout(() => {
          apply();
          restored.current = true;
        }, 500);
      });
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
