/*
# Phase 2: Full e-commerce database schema

Creates all tables for the e-commerce platform:
- profiles: user profile data (extends auth.users)
- categories, subcategories, brands: product reference data
- products: product catalog
- favorites: user wishlist
- cart_items: user cart for logged-in users
- orders: customer orders (supports guest checkout)
- order_items: order line items

Security:
- Reference data (categories, subcategories, brands, products): public read
- profiles: owner read/update/insert
- favorites, cart_items: owner-scoped CRUD
- orders: authenticated owner read, anon+authenticated insert (guest checkout)
- order_items: insert by anon+authenticated, select through parent order

Seeds categories, subcategories, and brands from existing site data.
*/

-- Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  phone text,
  address text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- Categories
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  image text,
  created_at timestamptz DEFAULT now()
);

-- Subcategories
CREATE TABLE IF NOT EXISTS subcategories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL,
  name text NOT NULL,
  image text,
  category_slug text REFERENCES categories(slug),
  created_at timestamptz DEFAULT now(),
  UNIQUE (slug, category_slug)
);

-- Brands
CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  image text,
  created_at timestamptz DEFAULT now()
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id text PRIMARY KEY,
  name text NOT NULL,
  category_slug text REFERENCES categories(slug),
  subcategory_slug text,
  brand_slug text REFERENCES brands(slug),
  price numeric NOT NULL,
  old_price numeric,
  rating numeric DEFAULT 0,
  description text,
  specs jsonb DEFAULT '[]'::jsonb,
  images jsonb DEFAULT '[]'::jsonb,
  gallery jsonb DEFAULT '[]'::jsonb,
  stock integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Favorites (user wishlist)
CREATE TABLE IF NOT EXISTS favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Cart items (for logged-in users)
CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Orders (supports guest checkout via nullable user_id)
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

-- Order items
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  product_name text NOT NULL,
  product_image text,
  quantity integer NOT NULL,
  price numeric NOT NULL,
  old_price numeric,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Profiles: owner only
DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT TO authenticated USING (auth.uid() = id);
DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);

-- Categories: public read
DROP POLICY IF EXISTS "read_categories" ON categories;
CREATE POLICY "read_categories" ON categories FOR SELECT TO anon, authenticated USING (true);

-- Subcategories: public read
DROP POLICY IF EXISTS "read_subcategories" ON subcategories;
CREATE POLICY "read_subcategories" ON subcategories FOR SELECT TO anon, authenticated USING (true);

-- Brands: public read
DROP POLICY IF EXISTS "read_brands" ON brands;
CREATE POLICY "read_brands" ON brands FOR SELECT TO anon, authenticated USING (true);

-- Products: public read
DROP POLICY IF EXISTS "read_products" ON products;
CREATE POLICY "read_products" ON products FOR SELECT TO anon, authenticated USING (true);

-- Favorites: owner CRUD
DROP POLICY IF EXISTS "select_own_favorites" ON favorites;
CREATE POLICY "select_own_favorites" ON favorites FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "insert_own_favorites" ON favorites;
CREATE POLICY "insert_own_favorites" ON favorites FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "delete_own_favorites" ON favorites;
CREATE POLICY "delete_own_favorites" ON favorites FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Cart items: owner CRUD
DROP POLICY IF EXISTS "select_own_cart" ON cart_items;
CREATE POLICY "select_own_cart" ON cart_items FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "insert_own_cart" ON cart_items;
CREATE POLICY "insert_own_cart" ON cart_items FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "update_own_cart" ON cart_items;
CREATE POLICY "update_own_cart" ON cart_items FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "delete_own_cart" ON cart_items;
CREATE POLICY "delete_own_cart" ON cart_items FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Orders: authenticated owner read, anon+authenticated insert (guest checkout)
DROP POLICY IF EXISTS "select_own_orders" ON orders;
CREATE POLICY "select_own_orders" ON orders FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "insert_orders" ON orders;
CREATE POLICY "insert_orders" ON orders FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "update_own_orders" ON orders;
CREATE POLICY "update_own_orders" ON orders FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Order items: insert by anon+authenticated, select through parent order
DROP POLICY IF EXISTS "insert_order_items" ON order_items;
CREATE POLICY "insert_order_items" ON order_items FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "select_own_order_items" ON order_items;
CREATE POLICY "select_own_order_items" ON order_items FOR SELECT TO authenticated USING (
  EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_slug);
CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory_slug);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand_slug);
CREATE INDEX IF NOT EXISTS idx_favorites_user ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_user ON cart_items(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);

-- Seed categories
INSERT INTO categories (slug, name, image) VALUES
  ('stationery', 'قرطاسية ومكتبية', 'https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('books', 'كتب', 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('toys', 'ألعاب', 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('gifts', 'هدايا', 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('electronics', 'إلكترونيات', 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('aprons', 'مآزر', 'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=800')
ON CONFLICT (slug) DO NOTHING;

-- Seed brands
INSERT INTO brands (slug, name, image) VALUES
  ('tecnowa', 'Tecnowa', 'https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('alhilal', 'الهلال', 'https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('roku', 'Roku', 'https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=400')
ON CONFLICT (slug) DO NOTHING;

-- Seed subcategories
INSERT INTO subcategories (slug, name, image, category_slug) VALUES
  ('pens', 'أقلام', 'https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('notebooks', 'دفاتر', 'https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('desk-organizers', 'منظمات مكتبية', 'https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('other-stationery', 'أخرى', 'https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('preschool', 'تحضيري', 'https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('primary', 'ابتدائي', 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('intermediate', 'متوسط', 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('secondary', 'ثانوي', 'https://images.pexels.com/photos/159711/books-belt-learning-education-159711.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('mushafs', 'مصاحف', 'https://images.pexels.com/photos/4308268/pexels-photo-4308268.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('religious', 'كتب دينية', 'https://images.pexels.com/photos/4308268/pexels-photo-4308268.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('encyclopedias', 'موسوعات', 'https://images.pexels.com/photos/2308657/pexels-photo-2308657.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('kids-stories', 'قصص أطفال', 'https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('other-books', 'أخرى', 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('educational', 'تعليمية', 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('plush', 'محشوة', 'https://images.pexels.com/photos/268840/pexels-photo-268840.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('remote-control', 'تحكم عن بعد', 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('other-toys', 'أخرى', 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('boxes', 'علب هدايا', 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=600', 'gifts'),
  ('decor', 'ديكور', 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600', 'gifts'),
  ('other-gifts', 'أخرى', 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=600', 'gifts'),
  ('phones', 'جوالات', 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('laptops', 'لابتوبات', 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('headphones', 'سماعات', 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('other-electronics', 'أخرى', 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('kids-aprons', 'مآزر أطفال', 'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=600', 'aprons'),
  ('adult-aprons', 'مآزر كبار', 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=600', 'aprons'),
  ('other-aprons', 'أخرى', 'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=600', 'aprons')
ON CONFLICT DO NOTHING;
