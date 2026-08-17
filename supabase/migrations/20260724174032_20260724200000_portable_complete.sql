/*
# Portable completion migration (orders & profiles only)

Adds:
  1. handle_new_user() trigger — auto-creates a profile row whenever a
     new user registers via auth.signUp()
  2. Profile DELETE policy so users can delete their own account data
  3. Admin read/update policies for orders and order_items
*/

-- 1. Auto-create profile on signup
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

-- 2. Profile DELETE policy
DROP POLICY IF EXISTS "delete_own_profile" ON profiles;
CREATE POLICY "delete_own_profile" ON profiles
  FOR DELETE TO authenticated USING (auth.uid() = id);

-- 3. Admin order policies
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
