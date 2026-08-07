// Hook for fetching real product ratings from the reviews database.
// Fetches the rating summary for a single product and returns it.
// Used by ProductCard to show the true average rating instead of a static value.

import { useState, useEffect } from 'react';
import type { ReviewSummary } from '@/types';
import { getProductRatingSummary } from '@/lib/reviews';

export function useProductRating(productId: string) {
  const [summary, setSummary] = useState<ReviewSummary>({ avg_rating: 0, review_count: 0 });

  useEffect(() => {
    let active = true;
    getProductRatingSummary(productId).then((s) => {
      if (active) setSummary(s);
    });
    return () => {
      active = false;
    };
  }, [productId]);

  return summary;
}
