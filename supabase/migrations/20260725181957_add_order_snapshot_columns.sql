/*
# Add order snapshot columns for historical integrity

## Purpose
Ensure old orders remain fully understandable even if a product changes or
the products table is removed. Customer info and per-item snapshot data are
stored on the order/order_items rows at checkout time so they never change
when source data changes later.

## 1. orders — new columns
- `customer_email` (text, nullable): email captured at checkout (guest or user).
- `notes` (text, nullable): customer delivery notes / instructions.
- `shipping_cost` (numeric, nullable): delivery cost snapshot at order time.
  Kept separate from the existing `delivery_fee` column for backwards
  compatibility; both hold the same value going forward, but `shipping_cost`
  is nullable so a NULL value means "wilaya not selected / unknown".

## 2. order_items — new columns
- `total_price` (numeric, nullable): quantity * unit_price snapshot.
- `color` (text, nullable): variant color snapshot.
- `size` (text, nullable): variant size snapshot.
- `sku` (text, nullable): product/variant SKU snapshot.

## 3. Security
- No RLS policy changes. Existing policies remain in effect.
- No new tables. No foreign keys added or removed.
- All additions are nullable so existing rows stay valid.

## 4. Notes
- `shipping_cost` is intentionally nullable: NULL means "no wilaya selected".
  This distinguishes "free/zero" from "unknown" per requirements.
- We do NOT drop or rename `delivery_fee` to avoid losing data in existing
  rows; new inserts write both columns with the same value.
- No triggers or functions are modified.
*/

ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS customer_email text,
  ADD COLUMN IF NOT EXISTS notes text,
  ADD COLUMN IF NOT EXISTS shipping_cost numeric;

ALTER TABLE public.order_items
  ADD COLUMN IF NOT EXISTS total_price numeric,
  ADD COLUMN IF NOT EXISTS color text,
  ADD COLUMN IF NOT EXISTS size text,
  ADD COLUMN IF NOT EXISTS sku text;
