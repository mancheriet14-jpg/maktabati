// Product detail page: gallery + info + similar products.
// Manages the selected variant state and passes it down to
// ProductGallery (variant images) and ProductInfo (variant price/stock).

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { getProductById, similarProducts, productGallery, mainCategoryName } from '@/data/products';
import type { ProductVariant, ReviewSummary } from '@/types';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import SimilarProducts from '@/components/product/SimilarProducts';
import ReviewsSection from '@/components/product/ReviewsSection';
import { getProductRatingSummary } from '@/lib/reviews';
import { tProductName } from '@/lib/i18nData';

export default function ProductPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  // No variant is auto-selected on load. The user must pick a variant
  // manually; until then the gallery shows all product images.
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);

  // Dynamic rating from the reviews database (second Supabase project).
  const [ratingSummary, setRatingSummary] = useState<ReviewSummary | null>(null);

  // Reset variant selection when navigating to a different product.
  useEffect(() => {
    setSelectedVariant(undefined);
  }, [id]);

  // Fetch the live rating summary whenever the product changes.
  useEffect(() => {
    if (!id) return;
    let active = true;
    getProductRatingSummary(id).then((s) => {
      if (active) setRatingSummary(s);
    });
    return () => {
      active = false;
    };
  }, [id]);

  if (!product) {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-neutral-500">{t('product.notFound')}</p>
        <Link to="/" className="mt-4 inline-block text-primary-600">
          {t('common.backToHome')}
        </Link>
      </div>
    );
  }

  const similar = similarProducts(product);
  const galleryImages = productGallery(product, selectedVariant);

  return (
    // key={id} forces React to remount the entire subtree when the product id
    // changes, so every child component (gallery, info, variants) starts fresh
    // instead of inheriting state (active image, qty, wishlist highlight) from
    // the previously viewed product.
    <div key={id} className="py-6">
      {/* Breadcrumb */}
      <nav className="container-page mb-4 flex items-center gap-1 text-xs text-neutral-400">
        <Link to="/" className="hover:text-primary-600">{t('common.home')}</Link>
        <ChevronLeft className="h-3 w-3" />
        <Link to={`/category/${product.mainCategory}`} className="hover:text-primary-600">
          {mainCategoryName(product.mainCategory)}
        </Link>
        <ChevronLeft className="h-3 w-3" />
        <span className="text-neutral-600">{tProductName(product.id)}</span>
      </nav>

      <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="min-w-0">
          <ProductGallery images={galleryImages} name={tProductName(product.id)} />
        </div>
        <ProductInfo
          product={product}
          variant={selectedVariant}
          onSelectVariant={setSelectedVariant}
          ratingSummary={ratingSummary}
        />
      </div>

      <ReviewsSection productId={product.id} />

      <SimilarProducts products={similar} />
    </div>
  );
}
