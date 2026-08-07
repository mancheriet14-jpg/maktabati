/*
# Storage bucket policies for product-images

1. Storage
- Bucket "product-images" already created as public.
- Added policies to allow public read and authenticated upload.

2. Security
- SELECT: public (anon + authenticated) — product images are public.
- INSERT/UPDATE/DELETE: authenticated only — admin/owner can upload.
*/

-- Public read access for product-images bucket
DROP POLICY IF EXISTS "Public read product images" ON storage.objects;
CREATE POLICY "Public read product images"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'product-images');

-- Authenticated upload
DROP POLICY IF EXISTS "Auth upload product images" ON storage.objects;
CREATE POLICY "Auth upload product images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'product-images');

-- Authenticated update
DROP POLICY IF EXISTS "Auth update product images" ON storage.objects;
CREATE POLICY "Auth update product images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'product-images')
  WITH CHECK (bucket_id = 'product-images');

-- Authenticated delete
DROP POLICY IF EXISTS "Auth delete product images" ON storage.objects;
CREATE POLICY "Auth delete product images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'product-images');
