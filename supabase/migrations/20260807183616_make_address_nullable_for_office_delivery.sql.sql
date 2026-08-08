-- Make orders.address nullable so office-delivery orders (which have no
-- street address) can be inserted. Home-delivery orders still require an
-- address, enforced by the application's form validation, not the DB.
ALTER TABLE orders ALTER COLUMN address DROP NOT NULL;