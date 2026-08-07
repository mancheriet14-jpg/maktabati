// Supabase client singleton.
// Credentials come from .env via Vite env vars.

import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from '@/config/site';

export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.anonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  },
);
