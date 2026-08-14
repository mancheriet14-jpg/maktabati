/*
# Add purchase price and profit tracking to orders system

1. Purpose
   This migration adds cost-price tracking to the e-commerce ordering system.
   Each order item now stores the purchase (cost) price per unit at the time
   of the order, so historical profit data is preserved even if the product's
   cost price changes later. The order itself stores the aggregate purchase
   cost and calculated profit.

2. Changes to `order_items` table
   - `purchase_price` (numeric, nullable, default 0): the per-unit cost price
     of the product/variant at the time the order was placed. Nullable so
     existing rows are not broken.

3. Changes to `orders` table
   - `total_purchase_cost` (numeric, nullable, default 0): sum of
     (purchase_price × quantity) for all items in the order. Does NOT include
     shipping/delivery cost.
   - `profit` (numeric, nullable): calculated as subtotal - total_purchase_cost.
     This is the product profit only, independent of delivery fees.

4. Security
   - No RLS policy changes. Existing policies on orders and order_items
     remain unchanged.
   - The purchase_price, total_purchase_cost, and profit columns are
     write-accessible through the existing INSERT/UPDATE policies (which are
     already owner-scoped). They are NOT exposed in the customer-facing
     checkout UI — only in the orders detail view (which is already
     owner-scoped to the authenticated user).

5. Important notes
   - All new columns are nullable with defaults so existing rows and code
     that doesn't set them continue to work.
   - The frontend checkout code will be updated to populate these fields
     from the product data (products.ts), NOT from user input, ensuring
     the cost price comes from the server-side data source.
*/

-- Add purchase_price to order_items
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'order_items' AND column_name = 'purchase_price'
  ) THEN
    ALTER TABLE order_items ADD COLUMN purchase_price numeric DEFAULT 0;
  END IF;
END $$;

-- Add total_purchase_cost and profit to orders
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'orders' AND column_name = 'total_purchase_cost'
  ) THEN
    ALTER TABLE orders ADD COLUMN total_purchase_cost numeric DEFAULT 0;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'orders' AND column_name = 'profit'
  ) THEN
    ALTER TABLE orders ADD COLUMN profit numeric DEFAULT 0;
  END IF;
END $$;
