// Product info panel: name, SKU, stock status, price, discount, wishlist,
// quantity, add-to-cart, buy now, description, info table.
// Supports product variants — when a variant is selected, price/stock/SKU
// and gallery update accordingly.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Minus, Plus, ShoppingCart, Check, Zap, Package } from 'lucide-react';
import type { Product, ProductVariant, ReviewSummary } from '@/types';
import { discountPercent } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { useAuth } from '@/lib/auth';
import { toast } from '@/lib/toast';
import { formatPrice } from '@/config/site';
import Rating from '@/components/ui/Rating';
import { tProductName, tProductDescription, tProductSpecs } from '@/lib/i18nData';
import ProductVariants from '@/components/product/ProductVariants';

interface ProductInfoProps {
  product: Product;
  variant?: ProductVariant;
  onSelectVariant: (variant: ProductVariant | undefined) => void;
  ratingSummary?: ReviewSummary | null;
}

export default function ProductInfo({ product, variant, onSelectVariant, ratingSummary }: ProductInfoProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((s) => s.addItem);
  const toggleWish = useWishlistStore((s) => s.toggle);
  const isWishlisted = useWishlistStore((s) => s.isWishlisted(product.id));
  const { user } = useAuth();

  // Effective values: variant overrides product defaults
  const price = variant?.price ?? product.price;
  const oldPrice = variant?.oldPrice ?? product.oldPrice;
  const sku = variant?.sku ?? product.sku;
  const stock = variant ? variant.stock : product.stock;
  const hasVariants = product.variants && product.variants.length > 0;

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
  const outOfStock = stock !== undefined && stock <= 0;
  const lowStock = stock !== undefined && stock > 0 && stock <= 5;

  const handleAdd = () => {
    if (outOfStock) return;
    if (hasVariants && !variant) {
      toast(t('product.selectOptionFirst'), 'info');
      return;
    }
    addItem(product, qty, variant);
    setAdded(true);
    toast(t('product.addedToCart'));
    setTimeout(() => setAdded(false), 1800);
  };

  const handleBuyNow = () => {
    if (outOfStock) return;
    if (hasVariants && !variant) {
      toast(t('product.selectOptionFirst'), 'info');
      return;
    }
    addItem(product, qty, variant);
    navigate('/cart');
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Name + rating */}
      <div>
        <h1 className="text-xl font-extrabold text-neutral-800 sm:text-2xl">
          {tProductName(product.id)}
        </h1>
        {/* Rating: show real stars when reviews exist; otherwise show empty
            stars + "لم يتم التقييم بعد" text. No number/average shown. */}
        {ratingSummary && ratingSummary.review_count > 0 ? (
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Rating value={ratingSummary.avg_rating} size="md" />
            {sku && (
              <span className="text-xs text-neutral-400">
                {t('product.sku')}<span className="font-medium text-neutral-600">{sku}</span>
              </span>
            )}
          </div>
        ) : (
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Rating value={0} size="md" />
            <span className="text-xs text-neutral-400">
              {t('product.notRatedYet')}
            </span>
            {sku && (
              <span className="text-xs text-neutral-400">
                {t('product.sku')}<span className="font-medium text-neutral-600">{sku}</span>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Stock status */}
      <div className="flex items-center gap-2">
        {outOfStock ? (
          <span className="flex items-center gap-1.5 rounded-full bg-error-50 px-3 py-1 text-xs font-bold text-error-600">
            <Package className="h-3.5 w-3.5" />
            {t('product.outOfStock')}
          </span>
        ) : (
          <span className="flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-bold text-success-600">
            <Package className="h-3.5 w-3.5" />
            {t('product.available')}
          </span>
        )}
        {lowStock && (
          <span className="text-xs font-medium text-warning-600">
            {t('product.lowStock', { count: stock })}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-extrabold text-primary-700">
          {formatPrice(price)}
        </span>
        {oldPrice && (
          <span className="text-lg text-neutral-400 line-through">
            {formatPrice(oldPrice)}
          </span>
        )}
        {discount > 0 && (
          <span className="rounded-full bg-error-500 px-2.5 py-1 text-sm font-bold text-white">
            {t('product.discount', { count: discount })}
          </span>
        )}
      </div>

      {/* Variant selector */}
      {hasVariants && (
        <ProductVariants
          variants={product.variants!}
          selectedId={variant?.id}
          onSelect={onSelectVariant}
        />
      )}

      {/* Quantity + add to cart + wishlist */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-neutral-200 bg-white">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
            aria-label={t('product.decrease')}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-sm font-bold">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100"
            aria-label={t('product.increase')}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={handleAdd}
          disabled={outOfStock}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-2.5 font-bold text-white transition sm:flex-none ${
            outOfStock
              ? 'cursor-not-allowed bg-neutral-300'
              : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {added ? (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2"
            >
              <Check className="h-5 w-5 text-success-500" />
              {t('product.addedToCartButton')}
            </motion.span>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" />
              {t('product.addToCart')}
            </>
          )}
        </button>

        <button
          onClick={() => {
            if (!user) {
              toast(t('product.mustLoginWishlist'), 'info');
              navigate('/login');
              return;
            }
            toggleWish(product.id);
            toast(isWishlisted ? t('product.removedFromWishlist') : t('product.addedToWishlist'));
          }}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
            isWishlisted
              ? 'border-error-500 bg-error-50 text-error-500'
              : 'border-neutral-200 text-neutral-500 hover:bg-neutral-100'
          }`}
          aria-label={t('common.wishlist')}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-error-500' : ''}`} />
        </button>
      </div>

      {/* Buy Now button */}
      <button
        onClick={handleBuyNow}
        disabled={outOfStock}
        className={`flex w-full items-center justify-center gap-2 rounded-full py-3 font-bold text-white transition ${
          outOfStock
            ? 'cursor-not-allowed bg-neutral-300'
            : 'bg-accent-500 hover:bg-accent-600'
        }`}
      >
        <Zap className="h-5 w-5" />
        {t('product.buyNow')}
      </button>

      {/* Description */}
      <div className="border-t border-neutral-100 pt-4">
        <h3 className="mb-2 text-sm font-bold text-neutral-700">{t('product.description')}</h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          {tProductDescription(product.id)}
        </p>
      </div>

      {/* Product info table */}
      {product.specs.length > 0 && (
        <div className="border-t border-neutral-100 pt-4">
          <h3 className="mb-3 text-sm font-bold text-neutral-700">{t('product.productInfo')}</h3>
          <div className="overflow-hidden rounded-xl border border-neutral-100">
            <table className="w-full text-sm">
              <tbody>
                {tProductSpecs(product.id, product.specs).map((spec, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2.5 font-medium text-neutral-500" style={{ width: '40%' }}>
                      {spec.label}
                    </td>
                    <td className="px-4 py-2.5 font-bold text-neutral-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
