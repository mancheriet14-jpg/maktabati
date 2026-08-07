-- ============================================================================
-- حذف الجداول غير الضرورية: brands, categories, favorites, subcategories
-- انسخ هذا الملف بالكامل والصقه في: Supabase Dashboard → SQL Editor → New query
-- ثم اضغط Run. آمن لإعادة التشغيل (idempotent).
-- ============================================================================

-- حذف الجداول الأربعة. CASCADE يزيل أي سياسات RLS ومفاتيح أجنبية وفهارس مرتبطة.
drop table if exists public.favorites cascade;
drop table if exists public.subcategories cascade;
drop table if exists public.categories cascade;
drop table if exists public.brands cascade;

-- ============================================================================
-- انتهى السكريبت. الجداول الأربعة لم تعد موجودة في قاعدة البيانات.
-- جداول profiles و orders و order_items لم تُمسّ.
-- ============================================================================
