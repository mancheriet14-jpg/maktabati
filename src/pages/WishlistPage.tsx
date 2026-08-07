// Wishlist page: products saved to the wishlist store.
// Requires login — shows login prompt for guests.

import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, LogIn, UserPlus } from 'lucide-react';
import { useWishlistStore } from '@/store/wishlistStore';
import { useAuth } from '@/lib/auth';
import { getProductById } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function WishlistPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const ids = useWishlistStore((s) => s.ids);

  // Not logged in — show login prompt
  if (!user) {
    return (
      <div className="container-page py-20 text-center">
        <Heart className="mx-auto h-16 w-16 text-neutral-300" />
        <p className="mt-4 text-lg font-bold text-neutral-700">{t('wishlist.mustLogin')}</p>
        <p className="mt-1 text-sm text-neutral-400">{t('wishlist.mustLoginSubtext')}</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700"
          >
            <LogIn className="h-4 w-4" />
            {t('common.login')}
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-2.5 text-sm font-bold text-neutral-600 transition hover:bg-neutral-50"
          >
            <UserPlus className="h-4 w-4" />
            {t('common.signup')}
          </button>
        </div>
      </div>
    );
  }

  const items = ids
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <Heart className="mx-auto h-16 w-16 text-neutral-300" />
        <p className="mt-4 text-neutral-500">{t('wishlist.empty')}</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full bg-primary-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700"
        >
          {t('common.browseProducts')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-8">
      <h1 className="mb-6 text-2xl font-extrabold text-neutral-800">{t('wishlist.title')}</h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
