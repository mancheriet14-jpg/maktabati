-- ═══════════════════════════════════════════════════════════════════════════
--  Product Reviews & Comments — Standalone Supabase Schema
--  Run this entire script in the second Supabase project (SQL Editor).
--  Creates everything needed: tables, indexes, constraints, RLS, functions,
--  triggers, and a view — no manual steps required afterward.
--
--  IMPORTANT: This schema uses NO foreign keys whatsoever. The columns
--  `user_id` and `product_id` are plain UUID/TEXT columns with no REFERENCES
--  to any other table (not auth.users, not products, nothing). Ownership of
--  a review is enforced in the application layer by comparing the current
--  user's id with the `user_id` stored on each review row.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. Extensions ──────────────────────────────────────────────────────────
-- gen_random_uuid() is available in pgcrypto; ensure it is enabled.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ── 2. Drop any existing foreign-key constraints (idempotent) ──────────────
-- If a previous version of this script created the FK, remove it so the
-- column becomes a plain UUID with no relationship to auth.users.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'product_reviews_user_id_fkey'
      AND table_name = 'product_reviews'
  ) THEN
    ALTER TABLE product_reviews DROP CONSTRAINT product_reviews_user_id_fkey;
  END IF;
END $$;

-- ── 3. Tables ──────────────────────────────────────────────────────────────

-- product_reviews: one row per customer review/comment on a product.
-- NO foreign keys — user_id and product_id are plain columns.
CREATE TABLE IF NOT EXISTS product_reviews (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id    text        NOT NULL,
  user_id       uuid,
  customer_name text        NOT NULL DEFAULT 'عميل'::text,
  rating        smallint    NOT NULL DEFAULT 5
                  CHECK (rating >= 1 AND rating <= 5),
  comment       text        NOT NULL DEFAULT ''::text,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- Ensure user_id is nullable and has no FK (handles existing tables).
ALTER TABLE product_reviews ALTER COLUMN user_id DROP NOT NULL;

-- ── 4. Indexes (performance for thousands of reviews) ─────────────────────
CREATE INDEX IF NOT EXISTS idx_product_reviews_product_id
  ON product_reviews (product_id);

CREATE INDEX IF NOT EXISTS idx_product_reviews_created_at
  ON product_reviews (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_product_reviews_rating
  ON product_reviews (rating);

-- Composite index for the most common query: "all reviews of product X, newest first"
CREATE INDEX IF NOT EXISTS idx_product_reviews_product_created
  ON product_reviews (product_id, created_at DESC);

-- ── 5. updated_at trigger ──────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_product_reviews_updated_at ON product_reviews;
CREATE TRIGGER trg_product_reviews_updated_at
  BEFORE UPDATE ON product_reviews
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();

-- ── 6. Row Level Security ─────────────────────────────────────────────────
ALTER TABLE product_reviews ENABLE ROW LEVEL SECURITY;

-- Everyone (including anon) can read all reviews.
DROP POLICY IF EXISTS "read_product_reviews" ON product_reviews;
CREATE POLICY "read_product_reviews"
  ON product_reviews FOR SELECT
  TO anon, authenticated
  USING (true);

-- Anyone (anon or authenticated) can insert a review.
-- user_id is optional — guests can leave reviews without an account.
-- Ownership is enforced in the application layer, not via FK / auth.uid().
DROP POLICY IF EXISTS "insert_product_reviews" ON product_reviews;
CREATE POLICY "insert_product_reviews"
  ON product_reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Anyone (anon or authenticated) can update a review.
-- The application verifies that the current user owns the review by
-- comparing user_id before allowing the update.
DROP POLICY IF EXISTS "update_own_product_review" ON product_reviews;
CREATE POLICY "update_own_product_review"
  ON product_reviews FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Anyone (anon or authenticated) can delete a review.
-- The application verifies ownership (user_id match) before deleting.
DROP POLICY IF EXISTS "delete_own_product_review" ON product_reviews;
CREATE POLICY "delete_own_product_review"
  ON product_reviews FOR DELETE
  TO anon, authenticated
  USING (true);

-- ── 7. Aggregate helper view ───────────────────────────────────────────────
-- product_rating_summary: one row per product_id with average + count,
-- computed dynamically from product_reviews (never stored on the product).
CREATE OR REPLACE VIEW product_rating_summary AS
SELECT
  product_id,
  COALESCE(AVG(rating), 0)::numeric(3,2) AS avg_rating,
  COUNT(*)::integer                          AS review_count
FROM product_reviews
GROUP BY product_id;

-- Grant read access to the view.
GRANT SELECT ON product_rating_summary TO anon, authenticated;

-- ═══════════════════════════════════════════════════════════════════════════
--  End of script — the project is ready to use immediately.
-- ═══════════════════════════════════════════════════════════════════════════
