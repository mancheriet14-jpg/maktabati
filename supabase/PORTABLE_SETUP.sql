/*
================================================================================
 PORTABLE MASTER SETUP — paste this entirely into the Supabase SQL Editor
 (or run via: supabase db push) on any fresh Supabase project.
 After running this file + setting VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
 in .env, the app works with zero manual dashboard steps.
================================================================================
*/

-- ── Extensions ────────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── Tables ────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  phone text,
  address text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  image text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS subcategories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL,
  name text NOT NULL,
  image text,
  category_slug text REFERENCES categories(slug),
  created_at timestamptz DEFAULT now(),
  UNIQUE (slug, category_slug)
);

CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  image text,
  created_at timestamptz DEFAULT now()
);

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
  variants jsonb DEFAULT NULL,
  bag_collection text DEFAULT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
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
CREATE INDEX IF NOT EXISTS idx_products_category    ON products(category_slug);
CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory_slug);
CREATE INDEX IF NOT EXISTS idx_products_brand       ON products(brand_slug);
CREATE INDEX IF NOT EXISTS idx_favorites_user       ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_user      ON cart_items(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user          ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order    ON order_items(order_id);

-- ── Enable RLS ────────────────────────────────────────────────────────────────
ALTER TABLE profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories    ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands        ENABLE ROW LEVEL SECURITY;
ALTER TABLE products      ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites     ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items    ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders        ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items   ENABLE ROW LEVEL SECURITY;

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

-- categories
DROP POLICY IF EXISTS "read_categories" ON categories;
DROP POLICY IF EXISTS "admin_insert_categories" ON categories;
DROP POLICY IF EXISTS "admin_update_categories" ON categories;
DROP POLICY IF EXISTS "admin_delete_categories" ON categories;
CREATE POLICY "read_categories"         ON categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admin_insert_categories" ON categories FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "admin_update_categories" ON categories FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_delete_categories" ON categories FOR DELETE TO authenticated USING (true);

-- subcategories
DROP POLICY IF EXISTS "read_subcategories" ON subcategories;
DROP POLICY IF EXISTS "admin_insert_subcategories" ON subcategories;
DROP POLICY IF EXISTS "admin_update_subcategories" ON subcategories;
DROP POLICY IF EXISTS "admin_delete_subcategories" ON subcategories;
CREATE POLICY "read_subcategories"         ON subcategories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admin_insert_subcategories" ON subcategories FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "admin_update_subcategories" ON subcategories FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_delete_subcategories" ON subcategories FOR DELETE TO authenticated USING (true);

-- brands
DROP POLICY IF EXISTS "read_brands" ON brands;
DROP POLICY IF EXISTS "admin_insert_brands" ON brands;
DROP POLICY IF EXISTS "admin_update_brands" ON brands;
DROP POLICY IF EXISTS "admin_delete_brands" ON brands;
CREATE POLICY "read_brands"         ON brands FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admin_insert_brands" ON brands FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "admin_update_brands" ON brands FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_delete_brands" ON brands FOR DELETE TO authenticated USING (true);

-- products
DROP POLICY IF EXISTS "read_products" ON products;
DROP POLICY IF EXISTS "admin_insert_products" ON products;
DROP POLICY IF EXISTS "admin_update_products" ON products;
DROP POLICY IF EXISTS "admin_delete_products" ON products;
CREATE POLICY "read_products"         ON products FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admin_insert_products" ON products FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "admin_update_products" ON products FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "admin_delete_products" ON products FOR DELETE TO authenticated USING (true);

-- favorites
DROP POLICY IF EXISTS "select_own_favorites" ON favorites;
DROP POLICY IF EXISTS "insert_own_favorites" ON favorites;
DROP POLICY IF EXISTS "delete_own_favorites" ON favorites;
CREATE POLICY "select_own_favorites" ON favorites FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "insert_own_favorites" ON favorites FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "delete_own_favorites" ON favorites FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- cart_items
DROP POLICY IF EXISTS "select_own_cart" ON cart_items;
DROP POLICY IF EXISTS "insert_own_cart" ON cart_items;
DROP POLICY IF EXISTS "update_own_cart" ON cart_items;
DROP POLICY IF EXISTS "delete_own_cart" ON cart_items;
CREATE POLICY "select_own_cart" ON cart_items FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "insert_own_cart" ON cart_items FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "update_own_cart" ON cart_items FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "delete_own_cart" ON cart_items FOR DELETE TO authenticated USING (auth.uid() = user_id);

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

-- ── Seed: categories ──────────────────────────────────────────────────────────
INSERT INTO categories (slug, name, image) VALUES
  ('stationery',  'قرطاسية ومكتبية', 'https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('books',       'كتب',              'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('toys',        'ألعاب',             'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('gifts',       'هدايا',             'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('electronics', 'إلكترونيات',        'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('aprons',      'مآزر',              'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=800')
ON CONFLICT (slug) DO NOTHING;

-- ── Seed: brands ──────────────────────────────────────────────────────────────
INSERT INTO brands (slug, name, image) VALUES
  ('tecnowa', 'Tecnowa', 'https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('alhilal', 'الهلال',  'https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=400'),
  ('roku',    'Roku',    'https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=400')
ON CONFLICT (slug) DO NOTHING;

-- ── Seed: subcategories ───────────────────────────────────────────────────────
INSERT INTO subcategories (slug, name, image, category_slug) VALUES
  ('pens',              'أقلام',           'https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('notebooks',         'دفاتر',            'https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('desk-organizers',   'منظمات مكتبية',    'https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('other-stationery',  'أخرى',             'https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=600', 'stationery'),
  ('preschool',         'تحضيري',           'https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('primary',           'ابتدائي',           'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('intermediate',      'متوسط',            'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('secondary',         'ثانوي',            'https://images.pexels.com/photos/159711/books-belt-learning-education-159711.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('mushafs',           'مصاحف',            'https://images.pexels.com/photos/4308268/pexels-photo-4308268.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('religious',         'كتب دينية',        'https://images.pexels.com/photos/4308268/pexels-photo-4308268.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('encyclopedias',     'موسوعات',          'https://images.pexels.com/photos/2308657/pexels-photo-2308657.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('kids-stories',      'قصص أطفال',        'https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('other-books',       'أخرى',             'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600', 'books'),
  ('educational',       'تعليمية',          'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('plush',             'محشوة',            'https://images.pexels.com/photos/268840/pexels-photo-268840.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('remote-control',    'تحكم عن بعد',      'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('other-toys',        'أخرى',             'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600', 'toys'),
  ('boxes',             'علب هدايا',        'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=600', 'gifts'),
  ('decor',             'ديكور',             'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600', 'gifts'),
  ('other-gifts',       'أخرى',             'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=600', 'gifts'),
  ('phones',            'جوالات',           'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('laptops',           'لابتوبات',         'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('headphones',        'سماعات',           'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('other-electronics', 'أخرى',             'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600', 'electronics'),
  ('kids-aprons',       'مآزر أطفال',       'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=600', 'aprons'),
  ('adult-aprons',      'مآزر كبار',        'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=600', 'aprons'),
  ('other-aprons',      'أخرى',             'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=600', 'aprons')
ON CONFLICT DO NOTHING;

-- ── Seed: products (batch 1) ──────────────────────────────────────────────────
INSERT INTO products (id, name, category_slug, subcategory_slug, brand_slug, price, old_price, rating, description, specs, images, gallery, stock, variants, bag_collection, created_at) VALUES
('st-1','طقم أقلام جل 12 قطعة','stationery','pens','tecnowa',45,60,4.6,'طقم أقلام جل عالية الجودة، جفاف سريع، كتابة ناعمة ومتسقة.',
 '[{"label":"العدد","value":"12 قلم"},{"label":"اللون","value":"أسود"}]'::jsonb,
 '["https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 '["https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 50,'[{"id":"st-1-black","name":"أسود","optionLabel":"اللون","price":45,"oldPrice":60,"stock":30,"sku":"PEN-12-BLK","images":["https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=800"]},{"id":"st-1-blue","name":"أزرق","optionLabel":"اللون","price":50,"oldPrice":65,"stock":20,"sku":"PEN-12-BLU","images":["https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=800"]},{"id":"st-1-red","name":"أحمر","optionLabel":"اللون","price":48,"oldPrice":62,"stock":15,"sku":"PEN-12-RED","images":["https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=800"]},{"id":"st-1-green","name":"أخضر","optionLabel":"اللون","price":52,"oldPrice":68,"stock":10,"sku":"PEN-12-GRN","images":["https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=800"]}]'::jsonb,
 NULL,'2024-10-01'),
('st-2','دفتر ملاحظات 200 ورقة','stationery','notebooks','roku',25,NULL,4.3,'دفتر ملاحظات عملي بتصميم أنيق وورق عالي الجودة.',
 '[{"label":"الأوراق","value":"200 ورقة"}]'::jsonb,
 '["https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,0,
 '[{"id":"st-2-a4","name":"A4","optionLabel":"الحجم","price":35,"oldPrice":45,"stock":25,"sku":"NB-200-A4","images":["https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=800"]},{"id":"st-2-a5","name":"A5","optionLabel":"الحجم","price":25,"oldPrice":32,"stock":0,"sku":"NB-200-A5","images":["https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=800"]},{"id":"st-2-a3","name":"A3","optionLabel":"الحجم","price":55,"oldPrice":70,"stock":12,"sku":"NB-200-A3","images":["https://images.pexels.com/photos/5650065/pexels-photo-5650065.jpeg?auto=compress&cs=tinysrgb&w=800"]}]'::jsonb,
 NULL,'2024-09-15'),
('st-3','منظم مكتبي متعدد الأدراج','stationery','desk-organizers','alhilal',85,110,4.7,'منظم مكتبي أنيق بأدراج متعددة لترتيب أدواتك.',
 '[{"label":"المادة","value":"بلاستيك متين"},{"label":"الأدراج","value":"3 أدراج"}]'::jsonb,
 '["https://images.pexels.com/photos/7966088/pexels-photo-7966088.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,NULL,NULL,NULL,'2024-10-10'),
('st-4','مبراة أقلام مزدوجة','stationery','other-stationery','tecnowa',15,NULL,4.1,'مبراة أقلام حادة بفتلتين لأسنان مختلفة.',
 '[{"label":"الفتلات","value":"2"}]'::jsonb,
 '["https://images.pexels.com/photos/6613469/pexels-photo-6613469.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,NULL,NULL,NULL,'2024-08-20'),
('bg-1','حقيبة ستايل مدرسية','stationery','other-stationery','tecnowa',120,160,4.5,'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
 '[{"label":"المادة","value":"بوليستر"}]'::jsonb,
 '["https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 '["https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/2587316/pexels-photo-2587316.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 30,NULL,'style','2024-10-20'),
('bg-2','حقيبة رياضية مدرسية','stationery','other-stationery','alhilal',100,NULL,4.3,'حقيبة رياضية متينة بألوان زاهية.',
 '[{"label":"المادة","value":"نايلون"}]'::jsonb,
 '["https://images.pexels.com/photos/2587316/pexels-photo-2587316.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,25,NULL,'sports','2024-10-18'),
('bg-3','حقيبة شخصيات خيالية','stationery','other-stationery','roku',130,170,4.7,'حقيبة بطباعة شخصيات كرتونية محبوبة.',
 '[{"label":"المقاس","value":"متوسط"}]'::jsonb,
 '["https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,15,NULL,'fantasy','2024-10-22'),
('bg-4','حقيبة الأبطال','stationery','other-stationery','tecnowa',140,NULL,4.6,'حقيبة بتصميم أبطال خارقين للأطفال.',
 '[{"label":"العمر","value":"6-12 سنة"}]'::jsonb,
 '["https://images.pexels.com/photos/8217454/pexels-photo-8217454.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,20,NULL,'heroes','2024-10-21'),
('bg-5','حقيبة رياض الأطفال','stationery','other-stationery','roku',80,100,4.2,'حقيبة صغيرة لرياض الأطفال بألوان مبهجة.',
 '[{"label":"العمر","value":"3-5 سنوات"}]'::jsonb,
 '["https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,40,NULL,'kindergarten','2024-10-19'),
('bg-6','حقيبة ظهر بعجلات','stationery','other-stationery','alhilal',180,220,4.8,'حقيبة ظهر بعجلات لتقليل الحمل على الظهر.',
 '[{"label":"العجلات","value":"2"}]'::jsonb,
 '["https://images.pexels.com/photos/8217454/pexels-photo-8217454.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 '["https://images.pexels.com/photos/8217454/pexels-photo-8217454.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 10,NULL,'wheeled','2024-10-23'),
('bg-7','المجموعة الكاملة - حقيبة + ملحقات','stationery','other-stationery','tecnowa',250,350,4.9,'حقيبة مدرسية كاملة مع حقيبة جانبية وعلبة أدوات.',
 '[{"label":"القطع","value":"3"}]'::jsonb,
 '["https://images.pexels.com/photos/6146069/pexels-photo-6146069.jpeg?auto=compress&cs=tinysrgb&w=800"]'::jsonb,
 NULL,8,NULL,'full-set','2024-10-24')
ON CONFLICT (id) DO NOTHING;
