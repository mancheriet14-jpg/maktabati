/*
================================================================================
 PORTABLE MASTER SETUP — paste this entirely into the Supabase SQL Editor
 (or run via: supabase db push) on any fresh Supabase project.
 After running this file + setting VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
 in .env, the app works with zero manual dashboard steps.

 This setup creates only three tables: profiles, orders, order_items.
================================================================================
*/

-- ── Extensions ────────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── Drop unused tables (idempotent) ───────────────────────────────────────────
DROP TABLE IF EXISTS public.cart_items CASCADE;
DROP TABLE IF EXISTS public.favorites   CASCADE;
DROP TABLE IF EXISTS public.products     CASCADE;
DROP TABLE IF EXISTS public.subcategories CASCADE;
DROP TABLE IF EXISTS public.categories  CASCADE;
DROP TABLE IF EXISTS public.brands      CASCADE;

-- ── Tables ────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  phone text,
  address text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  phone text NOT NULL,
  wilaya text NOT NULL,
  commune text,
  address text NOT NULL,
  postal_code text,
  country text DEFAULT 'الجزائر',
  status text NOT NULL DEFAULT 'قيد المراجعة',
  subtotal numeric NOT NULL,
  delivery_fee numeric NOT NULL DEFAULT 0,
  total numeric NOT NULL,
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
  variant_id text,
  variant_name text,
  variant_option_label text,
  variant_sku text,
  created_at timestamptz DEFAULT now()
);

-- ── Indexes ───────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_orders_user       ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order  ON order_items(order_id);

-- ── Enable RLS ────────────────────────────────────────────────────────────────
ALTER TABLE profiles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders       ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items  ENABLE ROW LEVEL SECURITY;

-- ── RLS Policies ──────────────────────────────────────────────────────────────

-- profiles
DROP POLICY IF EXISTS "select_own_profile" ON profiles;
DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
DROP POLICY IF EXISTS "update_own_profile" ON profiles;
DROP POLICY IF EXISTS "delete_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "delete_own_profile" ON profiles FOR DELETE TO authenticated USING (auth.uid() = id);

-- orders (anon+auth insert for guest checkout; authenticated can read own)
DROP POLICY IF EXISTS "insert_orders" ON orders;
DROP POLICY IF EXISTS "select_own_orders" ON orders;
DROP POLICY IF EXISTS "admin_select_all_orders" ON orders;
DROP POLICY IF EXISTS "update_own_orders" ON orders;
DROP POLICY IF EXISTS "admin_update_all_orders" ON orders;
CREATE POLICY "insert_orders"           ON orders FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "select_own_orders"       ON orders FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "admin_select_all_orders" ON orders FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_own_orders"       ON orders FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "admin_update_all_orders" ON orders FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- order_items
DROP POLICY IF EXISTS "insert_order_items" ON order_items;
DROP POLICY IF EXISTS "select_own_order_items" ON order_items;
DROP POLICY IF EXISTS "admin_select_all_order_items" ON order_items;
CREATE POLICY "insert_order_items" ON order_items FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "select_own_order_items" ON order_items FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()));
CREATE POLICY "admin_select_all_order_items" ON order_items FOR SELECT TO authenticated USING (true);

-- ── Trigger: auto-create profile on signup ────────────────────────────────────
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

-- ── Storage bucket ────────────────────────────────────────────────────────────
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'product-images', 'product-images', true, 5242880,
  ARRAY['image/jpeg','image/jpg','image/png','image/webp','image/gif']
)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public read product images"  ON storage.objects;
DROP POLICY IF EXISTS "Auth upload product images"  ON storage.objects;
DROP POLICY IF EXISTS "Auth update product images"  ON storage.objects;
DROP POLICY IF EXISTS "Auth delete product images"  ON storage.objects;
CREATE POLICY "Public read product images"  ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'product-images');
CREATE POLICY "Auth upload product images"  ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'product-images');
CREATE POLICY "Auth update product images"  ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'product-images') WITH CHECK (bucket_id = 'product-images');
CREATE POLICY "Auth delete product images"  ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'product-images');
