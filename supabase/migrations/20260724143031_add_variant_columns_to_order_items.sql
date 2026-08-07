/*
# Add variant support to order_items

1. Modified Tables
- `order_items`: Added 4 new nullable columns to store the selected variant
  for each line item, so the admin knows exactly which option the customer chose.

  New columns:
  - `variant_id` (text) — internal variant identifier
  - `variant_name` (text) — display name, e.g. "أسود" or "A4"
  - `variant_option_label` (text) — group label, e.g. "اللون" or "الحجم"
  - `variant_sku` (text) — variant-specific SKU if available

2. Security
- No RLS policy changes. The existing `insert_order_items` and
  `select_own_order_items` policies already cover these columns since
  they are row-level, not column-level.

3. Important Notes
- All new columns are nullable, so existing order_items rows are unaffected.
- No data is lost; this is purely additive.
*/

ALTER TABLE order_items
  ADD COLUMN IF NOT EXISTS variant_id text,
  ADD COLUMN IF NOT EXISTS variant_name text,
  ADD COLUMN IF NOT EXISTS variant_option_label text,
  ADD COLUMN IF NOT EXISTS variant_sku text;
