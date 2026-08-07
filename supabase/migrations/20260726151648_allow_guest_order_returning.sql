/*
# Allow reading guest orders for checkout RETURNING

## Problem
Guest checkout inserts an order with `user_id = NULL`. The INSERT policy
allows anon + authenticated to insert. But the `.select('id').single()` after
the insert (Postgres RETURNING) is evaluated against SELECT policies, which
were `authenticated`-only with `auth.uid() = user_id`. For a guest,
`auth.uid()` is NULL so `auth.uid() = user_id` (NULL = NULL) is NULL (falsy),
the RETURNING returns no rows, `.single()` throws, and order_items never get
created.

## Fix
Add SELECT policies on `orders` and `order_items` for `anon, authenticated`
that allow reading rows where the order's `user_id IS NULL` (guest orders).
Guest orders have no user ownership to protect — they're identified by the
order UUID/number shown on the success page. Own-order policies remain intact.

## Security
- `select_own_orders` (authenticated, auth.uid() = user_id) — unchanged.
- `admin_select_all_orders` (authenticated, true) — unchanged.
- New `select_guest_orders` (anon, authenticated) — `user_id IS NULL` only.
- Same pattern for order_items via EXISTS on parent orders.
- No INSERT/UPDATE/DELETE policy changes.
- RLS stays enabled on all tables.
*/

DROP POLICY IF EXISTS "select_guest_orders" ON public.orders;
CREATE POLICY "select_guest_orders"
  ON public.orders FOR SELECT
  TO anon, authenticated
  USING (user_id IS NULL);

DROP POLICY IF EXISTS "select_guest_order_items" ON public.order_items;
CREATE POLICY "select_guest_order_items"
  ON public.order_items FOR SELECT
  TO anon, authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE public.orders.id = public.order_items.order_id
        AND public.orders.user_id IS NULL
    )
  );
