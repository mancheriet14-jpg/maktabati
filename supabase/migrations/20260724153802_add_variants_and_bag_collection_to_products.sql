/*
# Add variants + bag_collection columns to products table

1. Modified Tables
- `products`: Added two new nullable columns:
  - `variants` (jsonb) — array of variant objects, each with id, name, optionLabel,
    price, oldPrice, stock, sku, images. NULL for products without variants.
  - `bag_collection` (text) — slug linking to a bag collection (stationery only).
    NULL for non-bag products.

2. Security
- No RLS policy changes needed — existing `read_products` policy covers all columns.

3. Important Notes
- Both columns are nullable, so existing product rows are unaffected.
- The `variants` jsonb column stores the full variants array so the frontend
  can read it directly without a separate table join.
*/

ALTER TABLE products
  ADD COLUMN IF NOT EXISTS variants jsonb DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS bag_collection text DEFAULT NULL;
