// Data-access layer for product reviews & comments.
// All reads/writes go through the SECOND Supabase client (reviewsSupabase),
// never the main store database.

import { reviewsSupabase } from '@/lib/reviewsSupabase';
import type { Review, ReviewSummary } from '@/types';

export interface NewReview {
  product_id: string;
  customer_name: string;
  rating: number;
  comment: string;
  user_id?: string;
}

// Fetch the aggregate rating + count for a product (dynamically computed).
export async function getProductRatingSummary(productId: string): Promise<ReviewSummary> {
  const { data, error } = await reviewsSupabase
    .from('product_rating_summary')
    .select('avg_rating, review_count')
    .eq('product_id', productId)
    .maybeSingle();

  if (error) {
    console.error('Failed to load rating summary:', error.message);
    return { avg_rating: 0, review_count: 0 };
  }

  if (!data) return { avg_rating: 0, review_count: 0 };

  return {
    avg_rating: Number(data.avg_rating) || 0,
    review_count: Number(data.review_count) || 0,
  };
}

// Fetch all reviews for a product, newest first.
export async function getProductReviews(productId: string): Promise<Review[]> {
  const { data, error } = await reviewsSupabase
    .from('product_reviews')
    .select('id, product_id, user_id, customer_name, rating, comment, created_at, updated_at')
    .eq('product_id', productId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to load reviews:', error.message);
    return [];
  }

  return (data ?? []) as Review[];
}

// Insert a new review. Returns the created row or throws.
export async function submitReview(review: NewReview): Promise<Review | null> {
  const payload: Record<string, unknown> = {
    product_id: review.product_id,
    customer_name: review.customer_name,
    rating: review.rating,
    comment: review.comment,
  };
  if (review.user_id) payload.user_id = review.user_id;

  const { data, error } = await reviewsSupabase
    .from('product_reviews')
    .insert(payload)
    .select('id, product_id, user_id, customer_name, rating, comment, created_at, updated_at')
    .single();

  if (error) throw new Error(error.message);
  return data as Review;
}

// Update an existing review (owner only). Returns the updated row or throws.
export async function updateReview(
  reviewId: string,
  updates: { rating: number; comment: string },
): Promise<Review | null> {
  const { data, error } = await reviewsSupabase
    .from('product_reviews')
    .update({ rating: updates.rating, comment: updates.comment })
    .eq('id', reviewId)
    .select('id, product_id, user_id, customer_name, rating, comment, created_at, updated_at')
    .single();

  if (error) throw new Error(error.message);
  return data as Review;
}

// Delete a review (owner only). Throws on error.
export async function deleteReview(reviewId: string): Promise<void> {
  const { error } = await reviewsSupabase
    .from('product_reviews')
    .delete()
    .eq('id', reviewId);

  if (error) throw new Error(error.message);
}
