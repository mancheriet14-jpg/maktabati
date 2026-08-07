import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
  'Access-Control-Max-Age': '86400',
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req: Request) => {
  // Preflight — must return 200 with CORS headers, no body.
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return json({ error: 'Server not configured' }, 500);
    }

    // 1. Verify the caller is authenticated via the anon-key client.
    const authHeader = req.headers.get('Authorization') ?? '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!token) {
      return json({ error: 'Missing auth token' }, 401);
    }

    const anonClient = createClient(supabaseUrl, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: userData, error: userErr } = await anonClient.auth.getUser(token);
    if (userErr || !userData.user) {
      return json({ error: 'Invalid or expired session' }, 401);
    }

    const targetUid = userData.user.id;

    // 2. Service-role client for privileged cleanup + auth deletion.
    const serviceClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // 2a. Remove the user's avatar files from the avatars bucket.
    try {
      const { data: avatarFiles } = await serviceClient.storage
        .from('avatars')
        .list(targetUid);
      if (avatarFiles && avatarFiles.length > 0) {
        const paths = avatarFiles.map((f) => `${targetUid}/${f.name}`);
        await serviceClient.storage.from('avatars').remove(paths);
      }
    } catch {
      // Best-effort: avatar cleanup must not block account deletion.
    }

    // 2b. Delete the user's orders and their order_items (cascade handles
    // order_items via order_items_order_id_fkey ON DELETE CASCADE).
    try {
      await serviceClient.from('orders').delete().eq('user_id', targetUid);
    } catch {
      // Best-effort: orders.user_id is ON DELETE SET NULL on auth.users,
      // so even if this fails the auth delete still succeeds.
    }

    // 3. Hard-delete the user from auth.users. This:
    //   - invalidates their credentials (sign-in with same email/password fails)
    //   - cascades to profiles (ON DELETE CASCADE on profiles.id)
    //   - sets orders.user_id to NULL (ON DELETE SET NULL)
    // The handle_new_user trigger only fires on INSERT to auth.users, so it
    // cannot recreate the profile after deletion.
    const { error: deleteErr } = await serviceClient.auth.admin.deleteUser(targetUid);
    if (deleteErr) {
      return json({ error: deleteErr.message }, 500);
    }

    return json({ success: true });
  } catch (err) {
    return json({ error: (err as Error).message ?? 'Unexpected error' }, 500);
  }
});
