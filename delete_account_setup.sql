-- ============================================================================
-- حذف الحساب نهائيًا — سكريبت SQL واحد
-- انسخ هذا الملف بالكامل والصقه في: Supabase Dashboard → SQL Editor → New query
-- ثم اضغط Run. يمكن تكرار التشغيل بأمان.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1) إنشاء bucket للصور الشخصية إن لم يكن موجودًا
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
select 'avatars', 'avatars', true
where not exists (select 1 from storage.buckets where id = 'avatars');

-- ---------------------------------------------------------------------------
-- 2) سياسات RLS على bucket الصور الشخصية
-- ---------------------------------------------------------------------------
drop policy if exists "avatars_read_all" on storage.objects;
create policy "avatars_read_all"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'avatars');

drop policy if exists "avatars_insert_own" on storage.objects;
create policy "avatars_insert_own"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "avatars_update_own" on storage.objects;
create policy "avatars_update_own"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "avatars_delete_own" on storage.objects;
create policy "avatars_delete_own"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- ---------------------------------------------------------------------------
-- 3) دالة حذف الحساب نهائيًا
--    SECURITY DEFINER = تعمل بصلاحيات postgres (service role داخلي)
--    لذا يمكنها حذف المستخدم من auth.users رغم أن المستخدم العادي لا يملك هذه الصلاحية.
--    بعد الحذف: profiles يُحذف تلقائيًا (cascade)، orders.user_id يصبح NULL،
--    وتسجيل الدخول بنفس البريد يفشل لأن المستخدم لم يعد موجودًا في Auth.
-- ---------------------------------------------------------------------------
create or replace function public.delete_own_account()
returns jsonb
language plpgsql
security definer
set search_path to public
as $$
declare
  _uid uuid := auth.uid();
begin
  if _uid is null then
    return jsonb_build_object('success', false, 'error', 'Not authenticated');
  end if;

  -- حذف طلبات المستخدم (order_items تُحذف تلقائيًا عبر cascade)
  begin
    delete from public.orders where user_id = _uid;
  exception when others then null;
  end;

  -- حذف المستخدم نهائيًا من auth.users
  -- (profiles يُحذف تلقائيًا عبر ON DELETE CASCADE)
  begin
    delete from auth.users where id = _uid;
    return jsonb_build_object('success', true);
  exception when others then
    return jsonb_build_object('success', false, 'error', 'Failed to delete user: ' || sqlerrm);
  end;
end;
$$;

-- ---------------------------------------------------------------------------
-- 4) منح صلاحية استدعاء الدالة للمستخدمين المسجلين
-- ---------------------------------------------------------------------------
grant execute on function public.delete_own_account() to authenticated;
grant execute on function public.delete_own_account() to anon;

-- ============================================================================
-- انتهى السكريبت.
-- بعد تشغيله سيصبح زر "حذف الحساب نهائيًا" يعمل دون Edge Function ودون CORS.
-- ============================================================================
