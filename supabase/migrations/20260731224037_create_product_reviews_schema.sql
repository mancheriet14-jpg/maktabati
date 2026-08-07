/*
# Create product reviews & comments schema

1. New Tables
- `product_reviews`: stores customer ratings and comments per product.
  Columns: id, product_id, user_id (nullable, FK to auth.users), customer_name,
  rating (1-5), comment, created_at, updated_at.

2. Indexes
- idx_product_reviews_product_id (product_id)
- idx_product_reviews_created_at (created_at DESC)
- idx_product_reviews_rating (rating)
- idx_product_reviews_product_created (product_id, created_at DESC) composite

3. Security (RLS)
- RLS enabled on product_reviews.
- SELECT: public (anon, authenticated) — everyone can read reviews.
- INSERT: anon, authenticated — anyone can submit a review (guest or user).
- UPDATE/DELETE: authenticated owner only (user_id = auth.uid()).

4. Functions / Triggers
- set_updated_at(): auto-updates updated_at on row update.
- trg_product_reviews_updated_at trigger.

5. Views
- product_rating_summary: dynamically computes avg_rating + review_count per
  product_id from product_reviews (never stored on the product table).
*/

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS product_reviews (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id    text        NOT NULL,
  user_id       uuid        REFERENCES auth.users(id) ON DELETE SET NULL,
  customer_name text        NOT NULL DEFAULT 'عميل',
  rating        smallint    NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  comment       text        NOT NULL DEFAULT '',
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_product_reviews_product_id ON product_reviews (product_id);
CREATE INDEX IF NOT EXISTS idx_product_reviews_created_at ON product_reviews (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_product_reviews_rating ON product_reviews (rating);
CREATE INDEX IF NOT EXISTS idx_product_reviews_product_created ON product_reviews (product_id, created_at DESC);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
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

ALTER TABLE product_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_product_reviews" ON product_reviews;
CREATE POLICY "read_product_reviews"
  ON product_reviews FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "insert_product_reviews" ON product_reviews;
CREATE POLICY "insert_product_reviews"
  ON product_reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "update_own_product_review" ON product_reviews;
CREATE POLICY "update_own_product_review"
  ON product_reviews FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "delete_own_product_review" ON product_reviews;
CREATE POLICY "delete_own_product_review"
  ON product_reviews FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

CREATE OR REPLACE VIEW product_rating_summary AS
SELECT
  product_id,
  COALESCE(AVG(rating), 0)::numeric(3,2) AS avg_rating,
  COUNT(*)::integer AS review_count
FROM product_reviews
GROUP BY product_id;

GRANT SELECT ON product_rating_summary TO anon, authenticated;
