// Supabase client for the SECOND database (reviews & comments only).
// Uses separate env vars so it never touches the main store database.
// Falls back to the main Supabase client env vars when the reviews-specific
// ones are not configured, so the app keeps working during setup.

import { createClient } from '@supabase/supabase-js';

const reviewsUrl =
  import.meta.env.VITE_REVIEWS_SUPABASE_URL ?? import.meta.env.VITE_SUPABASE_URL ?? '';
const reviewsAnonKey =
  import.meta.env.VITE_REVIEWS_SUPABASE_ANON_KEY ?? import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const reviewsSupabase = createClient(reviewsUrl, reviewsAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
