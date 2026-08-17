/*
# Full schema setup for Maktabati — orders, profiles & reviews

This migration creates the complete database schema from scratch for the
orders, profiles, and product reviews system. It creates:
- profiles (user profile data extending auth.users)
- orders, order_items (customer orders with guest checkout support)
- product_reviews (customer ratings and comments per product)
- storage bucket (avatars)
- RLS policies on all tables
- handle_new_user trigger for auto-creating profiles on signup
- Admin read/update policies for orders
- delete_own_account function for user self-service deletion
*/

-- 1. Profiles
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  phone text,
  address text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- 2. Orders + Order items
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  phone text NOT NULL,
  customer_email text,
  wilaya text NOT NULL,
  commune text,
  address text,
  postal_code text,
  country text DEFAULT 'الجزائر',
  delivery_type text CHECK (delivery_type IS NULL OR delivery_type IN ('office', 'home')),
  notes text,
  status text NOT NULL DEFAULT 'pending',
  subtotal numeric NOT NULL,
  delivery_fee numeric NOT NULL DEFAULT 0,
  shipping_cost numeric,
  total numeric NOT NULL,
  total_purchase_cost numeric DEFAULT 0,
  profit numeric,
  done text DEFAULT NULL,
  stock_deducted boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  product_name text NOT NULL,
  product_image text,
  quantity integer NOT NULL,
  price numeric NOT NULL,
  old_price numeric,
  total_price numeric,
  variant_id text,
  variant_name text,
  variant_option_label text,
  variant_sku text,
  color text,
  size text,
  sku text,
  purchase_price numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 3. Product reviews
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

-- 4. Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_reviews ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies

-- Profiles: owner only
DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT TO authenticated USING (auth.uid() = id);
DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "delete_own_profile" ON profiles;
CREATE POLICY "delete_own_profile" ON profiles FOR DELETE TO authenticated USING (auth.uid() = id);

-- Orders: owner read + admin read all + guest read + anon insert + admin update
DROP POLICY IF EXISTS "select_own_orders" ON orders;
CREATE POLICY "select_own_orders" ON orders FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "admin_select_all_orders" ON orders;
CREATE POLICY "admin_select_all_orders" ON orders FOR SELECT TO authenticated USING (true);
DROP POLICY IF EXISTS "select_guest_orders" ON orders;
CREATE POLICY "select_guest_orders" ON orders FOR SELECT TO anon, authenticated USING (user_id IS NULL);
DROP POLICY IF EXISTS "insert_orders" ON orders;
CREATE POLICY "insert_orders" ON orders FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "update_own_orders" ON orders;
CREATE POLICY "update_own_orders" ON orders FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "admin_update_all_orders" ON orders;
CREATE POLICY "admin_update_all_orders" ON orders FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- Order items: insert by all, select via parent order
DROP POLICY IF EXISTS "insert_order_items" ON order_items;
CREATE POLICY "insert_order_items" ON order_items FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "select_own_order_items" ON order_items;
CREATE POLICY "select_own_order_items" ON order_items FOR SELECT TO authenticated USING (
  EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
);
DROP POLICY IF EXISTS "select_guest_order_items" ON order_items;
CREATE POLICY "select_guest_order_items" ON order_items FOR SELECT TO anon, authenticated USING (
  EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id IS NULL)
);
DROP POLICY IF EXISTS "admin_select_all_order_items" ON order_items;
CREATE POLICY "admin_select_all_order_items" ON order_items FOR SELECT TO authenticated USING (true);

-- Product reviews: public read, anyone insert, owner update/delete
DROP POLICY IF EXISTS "read_product_reviews" ON product_reviews;
CREATE POLICY "read_product_reviews" ON product_reviews FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "insert_product_reviews" ON product_reviews;
CREATE POLICY "insert_product_reviews" ON product_reviews FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "update_own_product_review" ON product_reviews;
CREATE POLICY "update_own_product_review" ON product_reviews FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS "delete_own_product_review" ON product_reviews;
CREATE POLICY "delete_own_product_review" ON product_reviews FOR DELETE TO authenticated USING (user_id = auth.uid());

-- 6. Indexes
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_product_reviews_product_id ON product_reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_product_reviews_created_at ON product_reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_product_reviews_rating ON product_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_product_reviews_product_created ON product_reviews(product_id, created_at DESC);

-- 7. Review rating summary view
CREATE OR REPLACE VIEW product_rating_summary AS
SELECT
  product_id,
  COALESCE(AVG(rating), 0)::numeric(3,2) AS avg_rating,
  COUNT(*)::integer AS review_count
FROM product_reviews
GROUP BY product_id;

GRANT SELECT ON product_rating_summary TO anon, authenticated;

-- 8. set_updated_at trigger for reviews
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
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 9. handle_new_user trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'phone'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 10. Storage bucket (avatars only)
INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- avatars policies
DROP POLICY IF EXISTS "avatar_select_own" ON storage.objects;
CREATE POLICY "avatar_select_own"
  ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'avatars' AND (auth.uid())::text = (storage.foldername(name))[1]);
DROP POLICY IF EXISTS "avatar_insert_own" ON storage.objects;
CREATE POLICY "avatar_insert_own"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'avatars' AND (auth.uid())::text = (storage.foldername(name))[1]);
DROP POLICY IF EXISTS "avatar_update_own" ON storage.objects;
CREATE POLICY "avatar_update_own"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'avatars' AND (auth.uid())::text = (storage.foldername(name))[1])
  WITH CHECK (bucket_id = 'avatars' AND (auth.uid())::text = (storage.foldername(name))[1]);
DROP POLICY IF EXISTS "avatar_delete_own" ON storage.objects;
CREATE POLICY "avatar_delete_own"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'avatars' AND (auth.uid())::text = (storage.foldername(name))[1]);

-- 11. delete_own_account function
CREATE OR REPLACE FUNCTION public.delete_own_account()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path to public
AS $$
declare
  _uid uuid := auth.uid();
begin
  if _uid is null then
    return jsonb_build_object('success', false, 'error', 'Not authenticated');
  end if;

  begin
    delete from public.orders where user_id = _uid;
  exception when others then null;
  end;

  begin
    delete from auth.users where id = _uid;
    return jsonb_build_object('success', true);
  exception when others then
    return jsonb_build_object('success', false, 'error', 'Failed to delete user: ' || sqlerrm);
  end;
end;
$$;

GRANT EXECUTE ON FUNCTION public.delete_own_account() TO authenticated;
GRANT EXECUTE ON FUNCTION public.delete_own_account() TO anon;
