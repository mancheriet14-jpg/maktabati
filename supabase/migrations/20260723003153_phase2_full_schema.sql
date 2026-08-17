/*
# Phase 2: Orders & profiles database schema

Creates the core tables for orders and user profiles:
- profiles: user profile data (extends auth.users)
- orders: customer orders (supports guest checkout)
- order_items: order line items

Security:
- profiles: owner read/update/insert
- orders: authenticated owner read, anon+authenticated insert (guest checkout)
- order_items: insert by anon+authenticated, select through parent order
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
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Profiles: owner only
DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT TO authenticated USING (auth.uid() = id);
DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);

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
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
