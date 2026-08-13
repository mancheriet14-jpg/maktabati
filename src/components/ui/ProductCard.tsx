// Product card: image, name, price, old price, discount badge,
// full-width add-to-cart button with success animation.
// Shows "يبدأ من" (from) price when product has variants.
// Clicking the card (outside the button) opens the product page.

import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import type { Product } from '@/types';
import { discountPercent, minVariantPrice, hasVariantInStock } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { tProductName } from '@/lib/i18nData';
import { toast } from '@/lib/toast';
import { formatPrice } from '@/config/site';
import { useProductRating } from '@/lib/useProductRating';
import Rating from './Rating';

function ProductCardImpl({ product }: { product: Product }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);
  const ratingSummary = useProductRating(product.id);

  const hasVariants = product.variants && product.variants.length > 0;
  const displayPrice = hasVariants ? minVariantPrice(product) : product.price;
  const discount = hasVariants ? 0 : discountPercent(product);
  const outOfStock = !hasVariantInStock(product);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (outOfStock) return;
    // If product has variants, navigate to product page for selection
    if (hasVariants) {
      navigate(`/product/${product.id}`);
      return;
    }
    addItem(product);
    setAdded(true);
    toast(t('product.addedToCart'));
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-neutral-50">
        <img
          src={product.images[0]}
          alt={tProductName(product.id)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute right-2 top-2 rounded-full bg-error-500 px-2 py-0.5 text-xs font-bold text-white shadow">
            -{discount}%
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-bold leading-5 text-neutral-800">
          {tProductName(product.id)}
        </h3>

        <div className="mt-1.5">
          <Rating value={ratingSummary.avg_rating} />
        </div>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-base font-extrabold text-primary-700">
            {hasVariants && <span className="text-xs font-medium text-neutral-500">{t('product.startsFrom')}</span>}
            {formatPrice(displayPrice)}
          </span>
          {!hasVariants && product.oldPrice && (
            <span className="text-xs text-neutral-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Full-width add to cart button */}
        <button
          onClick={handleAdd}
          disabled={outOfStock}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition ${
            outOfStock
              ? 'cursor-not-allowed bg-neutral-200 text-neutral-400'
              : added
                ? 'bg-success-500 text-white'
                : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {outOfStock ? (
            <span>{t('product.outOfStock')}</span>
          ) : hasVariants ? (
            <span className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              {t('product.chooseOption')}
            </span>
          ) : (
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  {t('product.addedToCartShort')}
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {t('product.addButton')}
                </motion.span>
              )}
            </AnimatePresence>
          )}
        </button>
      </div>
    </div>
  );
}

const ProductCard = memo(ProductCardImpl);
export default ProductCard;
