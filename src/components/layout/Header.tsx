// Sticky, responsive header with logo, live search, category nav,
// and action icons (profile, wishlist, cart with badge).
// Category nav is always visible as a horizontal scroll on all devices.
// On desktop, action icons are on the far left.

import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Home,
} from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { useAuth } from '@/lib/auth';
import { mainCategories, findSubCategory, bagCollections } from '@/data/siteData';
import { siteConfig, formatPrice } from '@/config/site';
import { products, mainCategoryName, getProductById } from '@/data/products';
import { tMainCategory, tProductName } from '@/lib/i18nData';
import { searchAll, resultPath, type SearchResult } from '@/lib/search';
import { clearScrollPosition } from '@/lib/scrollStore';
import type { Product, MainCategorySlug } from '@/types';
import HorizontalScroll from '@/components/ui/HorizontalScroll';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const totalItems = useCartStore((s) => s.totalItems());
  const wishlistCount = useWishlistStore((s) => s.count());
  const { user, profile } = useAuth();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Resolve the active main category from the current route so the nav stays
  // highlighted on sub-category, bag-collection, and product pages too.
  const activeMainSlug: MainCategorySlug | null = (() => {
    const path = location.pathname;
    const catMatch = path.match(/^\/category\/([^/]+)/);
    if (catMatch) return catMatch[1] as MainCategorySlug;

    const subMatch = path.match(/^\/subcategory\/([^/]+)/);
    if (subMatch) {
      const found = findSubCategory(subMatch[1]);
      if (found) return found.mainSlug;
    }

    const bagMatch = path.match(/^\/bag-collection\/([^/]+)/);
    if (bagMatch) {
      // Bag collections belong to the stationery category.
      const exists = bagCollections.some((b) => b.slug === bagMatch[1]);
      if (exists) return 'stationery';
    }

    const productMatch = path.match(/^\/product\/([^/]+)/);
    if (productMatch) {
      const product = getProductById(productMatch[1]);
      if (product) return product.mainCategory;
    }

    return null;
  })();

  const isCategoryActive = (slug: string) => activeMainSlug === slug;

  // When clicking a main category that is already the current page,
  // force a full reload to reset all page state and scroll to top.
  // Otherwise let the normal Link navigation proceed (scroll position
  // will be restored by the Layout's scroll-restoration system).
  const handleCategoryClick = (e: React.MouseEvent, slug: string) => {
    if (location.pathname === `/category/${slug}`) {
      e.preventDefault();
      // Clear saved scroll position so the reload starts fresh at the top.
      clearScrollPosition(`/category/${slug}`);
      window.scrollTo(0, 0);
      window.location.reload();
    }
  };

  // Same reload-on-reclick behaviour for the Home link.
  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      clearScrollPosition('/');
      window.scrollTo(0, 0);
      window.location.reload();
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowSearch(false);
    }
  };

  // Live search results — comprehensive across products, categories, brands
  const liveResults: SearchResult[] = query.trim()
    ? searchAll(query.trim(), 8)
    : [];

  // Close search dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-soft">
        {/* Top row */}
        <div className="container-page py-3">
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/img/sliders/logo.jpg"
                alt={siteConfig.name}
                className="h-12 w-12 rounded-2xl object-cover"
              />
              <span className="hidden text-lg font-extrabold text-primary-800 sm:block">
                {siteConfig.name}
              </span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl" ref={searchRef}>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowSearch(true);
                    }}
                    onFocus={() => setShowSearch(true)}
                    placeholder={t('header.searchPlaceholder')}
                    className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-2.5 pr-11 pl-4 text-sm outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </form>

              {/* Live search dropdown */}
              <AnimatePresence>
                {showSearch && liveResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute mt-2 w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-float"
                  >
                    {liveResults.map((r) => (
                      <button
                        key={`${r.type}-${r.product?.id ?? r.categorySlug ?? r.subSlug ?? r.brandSlug}`}
                        onClick={() => {
                          navigate(resultPath(r));
                          setShowSearch(false);
                          setQuery('');
                        }}
                        className="flex w-full items-center gap-3 p-2.5 text-right transition hover:bg-neutral-50"
                      >
                        {r.image && (
                          <img
                            src={r.image}
                            alt={r.label}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-bold text-neutral-700 line-clamp-1">{r.label}</p>
                          {r.subLabel && (
                            <p className="text-xs text-neutral-400">{r.subLabel}</p>
                          )}
                        </div>
                        {r.price !== undefined && (
                          <span className="text-sm font-bold text-primary-600">
                            {formatPrice(r.price)}
                          </span>
                        )}
                        {r.type !== 'product' && (
                          <span className="rounded-md bg-primary-50 px-2 py-0.5 text-[10px] font-bold text-primary-600">
                            {r.type === 'category' ? t('common.all') : r.type === 'subcategory' ? t('common.all') : t('common.all')}
                          </span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions — far left on desktop */}
            <div className="flex items-center gap-1 sm:gap-2">
              {user ? (
                <Link
                  to="/profile"
                  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-neutral-600 transition hover:bg-neutral-100"
                  aria-label={t('common.profile')}
                >
                  {profile?.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt={t('common.profile')}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
                  aria-label={t('common.login')}
                >
                  <User className="h-5 w-5" />
                </Link>
              )}

              <LanguageSelector />

              <Link
                to="/wishlist"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
                aria-label={t('common.wishlist')}
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -left-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-500 px-1 text-[10px] font-bold text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
                aria-label={t('common.cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -left-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-600 px-1 text-[10px] font-bold text-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Category nav — always visible, horizontal scroll on all devices */}
        <nav className="border-t border-neutral-100">
          <div className="container-page">
            <HorizontalScroll className="py-2">
              <Link
                to="/"
                onClick={(e) => handleHomeClick(e)}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold transition ${
                  isActive('/')
                    ? 'bg-primary-600 text-white'
                    : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                <Home className="h-4 w-4" />
                {t('nav.home')}
              </Link>
              {mainCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  onClick={(e) => handleCategoryClick(e, cat.slug)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    isCategoryActive(cat.slug)
                      ? 'bg-primary-600 text-white'
                      : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  {tMainCategory(cat.slug)}
                </Link>
              ))}
              <Link
                to="/offers"
                className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  isActive('/offers')
                    ? 'bg-primary-600 text-white'
                    : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {t('nav.offers')}
              </Link>
              {user && (
                <Link
                  to="/profile"
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    isActive('/profile')
                      ? 'bg-primary-600 text-white'
                      : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  {t('nav.profile')}
                </Link>
              )}
            </HorizontalScroll>
          </div>
        </nav>
      </header>
    </>
  );
}
