/*
# Portable completion migration
#
# Makes the project fully self-contained so it runs on any fresh Supabase
# project after running migrations — no manual dashboard steps needed.
#
# Adds:
#   1. handle_new_user() trigger  — auto-creates a profile row whenever a
#      new user registers via auth.signUp()
#   2. storage.buckets insert     — creates the "product-images" public bucket
#   3. Authenticated write policies for products/categories/brands/orders so
#      an admin account can manage data via the app
#   4. Profile DELETE policy so users can delete their own account data
*/

-- ─────────────────────────────────────────────────────────────────────────────
-- 1. Auto-create profile on signup
-- ─────────────────────────────────────────────────────────────────────────────

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

-- ─────────────────────────────────────────────────────────────────────────────
-- 2. Storage bucket (public, so image URLs work without a signed token)
-- ─────────────────────────────────────────────────────────────────────────────

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'product-images',
  'product-images',
  true,
  5242880,
  ARRAY['image/jpeg','image/jpg','image/png','image/webp','image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- ─────────────────────────────────────────────────────────────────────────────
-- 3. Admin write policies
-- ─────────────────────────────────────────────────────────────────────────────

-- Products
DROP POLICY IF EXISTS "admin_insert_products" ON products;
CREATE POLICY "admin_insert_products" ON products
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_products" ON products;
CREATE POLICY "admin_update_products" ON products
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_products" ON products;
CREATE POLICY "admin_delete_products" ON products
  FOR DELETE TO authenticated USING (true);

-- Categories
DROP POLICY IF EXISTS "admin_insert_categories" ON categories;
CREATE POLICY "admin_insert_categories" ON categories
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_categories" ON categories;
CREATE POLICY "admin_update_categories" ON categories
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_categories" ON categories;
CREATE POLICY "admin_delete_categories" ON categories
  FOR DELETE TO authenticated USING (true);

-- Subcategories
DROP POLICY IF EXISTS "admin_insert_subcategories" ON subcategories;
CREATE POLICY "admin_insert_subcategories" ON subcategories
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_subcategories" ON subcategories;
CREATE POLICY "admin_update_subcategories" ON subcategories
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_subcategories" ON subcategories;
CREATE POLICY "admin_delete_subcategories" ON subcategories
  FOR DELETE TO authenticated USING (true);

-- Brands
DROP POLICY IF EXISTS "admin_insert_brands" ON brands;
CREATE POLICY "admin_insert_brands" ON brands
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_brands" ON brands;
CREATE POLICY "admin_update_brands" ON brands
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_brands" ON brands;
CREATE POLICY "admin_delete_brands" ON brands
  FOR DELETE TO authenticated USING (true);

-- Orders: admin can select all and update any order status
DROP POLICY IF EXISTS "admin_select_all_orders" ON orders;
CREATE POLICY "admin_select_all_orders" ON orders
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_update_all_orders" ON orders;
CREATE POLICY "admin_update_all_orders" ON orders
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- Order items: admin can select all
DROP POLICY IF EXISTS "admin_select_all_order_items" ON order_items;
CREATE POLICY "admin_select_all_order_items" ON order_items
  FOR SELECT TO authenticated USING (true);

-- ─────────────────────────────────────────────────────────────────────────────
-- 4. Profile DELETE policy
-- ─────────────────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "delete_own_profile" ON profiles;
CREATE POLICY "delete_own_profile" ON profiles
  FOR DELETE TO authenticated USING (auth.uid() = id);
