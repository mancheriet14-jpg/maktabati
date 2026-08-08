-- Add a delivery_type column to orders so we record whether the customer chose
-- office delivery ("office") or home delivery ("home"). Kept nullable for
-- backwards compatibility with existing rows; new orders always set it.

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS delivery_type text
  CHECK (delivery_type IS NULL OR delivery_type IN ('office', 'home'));
