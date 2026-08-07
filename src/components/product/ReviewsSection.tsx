// Reviews & comments section for the product page.
// Reads from and writes to the SECOND Supabase database (reviews only).
// Renders as a collapsible accordion: a professional header with a chevron
// that expands to reveal the average rating, review count, comment list,
// and a form to submit/edit/delete reviews.

import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Loader2,
  MessageSquare,
  ChevronDown,
  Pencil,
  Trash2,
  X,
} from 'lucide-react';
import type { Review, ReviewSummary } from '@/types';
import {
  getProductReviews,
  getProductRatingSummary,
  submitReview,
  updateReview,
  deleteReview,
} from '@/lib/reviews';
import { useAuth } from '@/lib/auth';
import { toast } from '@/lib/toast';
import Rating from '@/components/ui/Rating';

interface ReviewsSectionProps {
  productId: string;
}

export default function ReviewsSection({ productId }: ReviewsSectionProps) {
  const { t } = useTranslation();
  const { user, profile } = useAuth();

  const [open, setOpen] = useState(false);
  const [summary, setSummary] = useState<ReviewSummary>({ avg_rating: 0, review_count: 0 });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editRating, setEditRating] = useState(5);
  const [editComment, setEditComment] = useState('');
  const [editHover, setEditHover] = useState(0);
  const [savingEdit, setSavingEdit] = useState(false);

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<Review | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadAll = useCallback(async () => {
    setLoading(true);
    const [s, r] = await Promise.all([
      getProductRatingSummary(productId),
      getProductReviews(productId),
    ]);
    setSummary(s);
    setReviews(r);
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso);
      const locale =
        t('reviews.locale') === 'ar' ? 'ar-DZ' : t('reviews.locale') === 'fr' ? 'fr-FR' : 'en-US';
      return d.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return iso;
    }
  };

  const recomputeSummary = (list: Review[]) => {
    if (list.length === 0) {
      setSummary({ avg_rating: 0, review_count: 0 });
      return;
    }
    const sum = list.reduce((a, r) => a + r.rating, 0);
    setSummary({ avg_rating: sum / list.length, review_count: list.length });
  };

  // ── Submit new review ──────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!comment.trim()) {
      toast(t('reviews.commentRequired'), 'error');
      return;
    }
    if (!name.trim() && !user) {
      toast(t('reviews.nameRequired'), 'error');
      return;
    }

    setSubmitting(true);
    try {
      const created = await submitReview({
        product_id: productId,
        customer_name: name.trim() || profile?.full_name || t('reviews.customer'),
        rating,
        comment: comment.trim(),
        user_id: user?.id,
      });
      if (created) {
        const updated = [created, ...reviews];
        setReviews(updated);
        recomputeSummary(updated);
        setComment('');
        setRating(5);
        if (!user) setName('');
        toast(t('reviews.submitSuccess'), 'success');
      }
    } catch (err) {
      toast(t('reviews.submitError'), 'error');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // ── Edit review ─────────────────────────────────────────────────────────
  const startEdit = (review: Review) => {
    setEditingId(review.id);
    setEditRating(review.rating);
    setEditComment(review.comment);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditComment('');
    setEditRating(5);
  };

  const handleSaveEdit = async (reviewId: string) => {
    if (savingEdit) return;
    if (!editComment.trim()) {
      toast(t('reviews.commentRequired'), 'error');
      return;
    }
    setSavingEdit(true);
    try {
      const updated = await updateReview(reviewId, {
        rating: editRating,
        comment: editComment.trim(),
      });
      if (updated) {
        const newList = reviews.map((r) => (r.id === reviewId ? updated : r));
        setReviews(newList);
        recomputeSummary(newList);
        cancelEdit();
        toast(t('reviews.editSuccess'), 'success');
      }
    } catch (err) {
      toast(t('reviews.editError'), 'error');
      console.error(err);
    } finally {
      setSavingEdit(false);
    }
  };

  // ── Delete review ──────────────────────────────────────────────────────
  const confirmDelete = async () => {
    if (!deleteTarget || deleting) return;
    setDeleting(true);
    try {
      await deleteReview(deleteTarget.id);
      const newList = reviews.filter((r) => r.id !== deleteTarget.id);
      setReviews(newList);
      recomputeSummary(newList);
      setDeleteTarget(null);
      toast(t('reviews.deleteSuccess'), 'success');
    } catch (err) {
      toast(t('reviews.deleteError'), 'error');
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  // ── Star picker sub-component ───────────────────────────────────────────
  const StarPicker = ({
    value,
    onChange,
    hover,
    setHover,
  }: {
    value: number;
    onChange: (n: number) => void;
    hover: number;
    setHover: (n: number) => void;
  }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          className="p-0.5"
          aria-label={`${n} ${t('reviews.stars')}`}
        >
          <Star
            className={`h-6 w-6 transition ${
              n <= (hover || value)
                ? 'fill-warning-500 text-warning-500'
                : 'fill-neutral-200 text-neutral-200'
            }`}
          />
        </button>
      ))}
      <span className="mr-2 text-sm font-bold text-neutral-600">{value}/5</span>
    </div>
  );

  return (
    <section className="container-page mt-10">
      {/* ── Accordion header ────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-sm transition hover:border-primary-200 hover:shadow-md"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div className="text-start">
            <h2 className="text-base font-extrabold text-neutral-800 sm:text-lg">
              {t('reviews.title')}
            </h2>
            {summary.review_count > 0 && (
              <p className="text-xs text-neutral-500">
                {summary.avg_rating.toFixed(1)} · {t('reviews.countLabel', { count: summary.review_count })}
              </p>
            )}
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 text-neutral-400" />
        </motion.div>
      </button>

      {/* ── Accordion body ────────────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-6 pt-5">
              {/* ── Summary card ─────────────────────────────────────────── */}
              <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50/30 p-5">
                <span className="text-4xl font-extrabold text-neutral-800">
                  {summary.avg_rating.toFixed(1)}
                </span>
                <div>
                  <Rating value={summary.avg_rating} size="md" />
                  <p className="mt-1 text-xs text-neutral-500">
                    {t('reviews.countLabel', { count: summary.review_count })}
                  </p>
                </div>
              </div>

              {/* ── Review form ──────────────────────────────────────────── */}
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-neutral-100 p-5 shadow-sm"
              >
                <h3 className="mb-4 text-sm font-bold text-neutral-700">
                  {t('reviews.writeReview')}
                </h3>

                {!user && (
                  <div className="mb-4">
                    <label className="mb-1 block text-xs font-medium text-neutral-500">
                      {t('reviews.yourName')}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('reviews.namePlaceholder')}
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="mb-1 block text-xs font-medium text-neutral-500">
                    {t('reviews.yourRating')}
                  </label>
                  <StarPicker
                    value={rating}
                    onChange={setRating}
                    hover={hoverRating}
                    setHover={setHoverRating}
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-xs font-medium text-neutral-500">
                    {t('reviews.yourComment')}
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    placeholder={t('reviews.commentPlaceholder')}
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t('reviews.submitting')}
                    </>
                  ) : (
                    t('reviews.submit')
                  )}
                </button>
              </form>

              {/* ── Reviews list ─────────────────────────────────────────── */}
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-neutral-400" />
                </div>
              ) : reviews.length === 0 ? (
                <p className="py-8 text-center text-sm text-neutral-400">
                  {t('reviews.noReviews')}
                </p>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review) => {
                    const isOwner = user && review.user_id === user.id;

                    return (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl border border-neutral-100 p-4 shadow-sm transition hover:shadow-md"
                      >
                        {editingId === review.id ? (
                          /* ── Edit mode ─────────────────────────────────── */
                          <div className="space-y-4">
                            <div>
                              <label className="mb-1 block text-xs font-medium text-neutral-500">
                                {t('reviews.yourRating')}
                              </label>
                              <StarPicker
                                value={editRating}
                                onChange={setEditRating}
                                hover={editHover}
                                setHover={setEditHover}
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium text-neutral-500">
                                {t('reviews.yourComment')}
                              </label>
                              <textarea
                                value={editComment}
                                onChange={(e) => setEditComment(e.target.value)}
                                rows={3}
                                className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleSaveEdit(review.id)}
                                disabled={savingEdit}
                                className="flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-primary-700 disabled:opacity-60"
                              >
                                {savingEdit ? (
                                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                ) : null}
                                {t('reviews.save')}
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-4 py-2 text-xs font-bold text-neutral-600 transition hover:bg-neutral-200"
                              >
                                {t('reviews.cancel')}
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* ── Display mode ──────────────────────────────── */
                          <>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                                  {review.customer_name.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-neutral-700">
                                    {review.customer_name}
                                  </p>
                                  <p className="text-xs text-neutral-400">
                                    {formatDate(review.created_at)}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Rating value={review.rating} size="sm" />
                                {isOwner && (
                                  <div className="flex items-center gap-1">
                                    <button
                                      onClick={() => startEdit(review)}
                                      className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-primary-50 hover:text-primary-600"
                                      aria-label={t('reviews.edit')}
                                    >
                                      <Pencil className="h-3.5 w-3.5" />
                                    </button>
                                    <button
                                      onClick={() => setDeleteTarget(review)}
                                      className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-error-50 hover:text-error-500"
                                      aria-label={t('reviews.delete')}
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                            {review.comment && (
                              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                {review.comment}
                              </p>
                            )}
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Delete confirmation modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {deleteTarget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => !deleting && setDeleteTarget(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base font-bold text-neutral-800">
                  {t('reviews.confirmDeleteTitle')}
                </h3>
                <button
                  onClick={() => setDeleteTarget(null)}
                  disabled={deleting}
                  className="rounded-lg p-1 text-neutral-400 transition hover:bg-neutral-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                {t('reviews.confirmDeleteText')}
              </p>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => setDeleteTarget(null)}
                  disabled={deleting}
                  className="rounded-full bg-neutral-100 px-5 py-2 text-sm font-bold text-neutral-600 transition hover:bg-neutral-200"
                >
                  {t('reviews.cancel')}
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={deleting}
                  className="flex items-center gap-1.5 rounded-full bg-error-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-error-600 disabled:opacity-60"
                >
                  {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {t('reviews.confirmDeleteBtn')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
