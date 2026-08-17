// Profile page: avatar, user info, edit profile, recent orders,
// recent wishlist items, logout with confirmation modal.

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Package, LogOut, Check, Heart, ShoppingBag, Camera, Loader2, Trash2, AlertTriangle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/lib/auth';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { toast } from '@/lib/toast';
import { supabase } from '@/lib/supabase';
import { formatPrice } from '@/config/site';
import { getProductById } from '@/data/products';
import { dateLocale, tProductName } from '@/lib/i18nData';

const AVATAR_MAX_SIZE = 2 * 1024 * 1024; // 2 MB
const AVATAR_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

interface Order {
  id: string;
  order_number: string;
  created_at: string;
  status: string;
  total: number;
}

export default function ProfilePage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user, profile, signOut, updateProfile, loading } = useAuth();
  const clearWishlist = useWishlistStore((s) => s.setIds);
  const clearCart = useCartStore((s) => s.clear);
  const wishlistIds = useWishlistStore((s) => s.ids);

  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState(profile?.full_name ?? '');
  const [phone, setPhone] = useState(profile?.phone ?? '');
  const [address, setAddress] = useState(profile?.address ?? '');
  const [saving, setSaving] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Wait for the auth session to resolve before deciding to redirect.
    // On a fresh page load `user` is null until `getSession()` completes;
    // redirecting immediately would log out a signed-in user on every refresh.
    if (loading) return;
    if (!user) {
      navigate('/login');
      return;
    }
    (async () => {
      const { data } = await supabase
        .from('orders')
        .select('id, order_number, created_at, status, total')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);
      setOrders((data as Order[]) ?? []);
    })();
  }, [user, navigate, loading]);

  if (loading || !user) {
    return (
      <div className="container-page py-20 text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-primary-200 border-t-primary-600" />
      </div>
    );
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!AVATAR_TYPES.includes(file.type)) {
      toast(t('profile.errors.imageFormat'), 'error');
      return;
    }
    if (file.size > AVATAR_MAX_SIZE) {
      toast(t('profile.errors.imageTooLarge'), 'error');
      return;
    }

    setUploadingAvatar(true);
    try {
      const ext = file.name.split('.').pop() ?? 'png';
      const path = `${user.id}/avatar.${ext}`;

      // Remove old avatar files (any extension) before uploading the new one
      const { data: existing } = await supabase.storage.from('avatars').list(user.id);
      if (existing && existing.length > 0) {
        await supabase.storage.from('avatars').remove(existing.map((f) => `${user.id}/${f.name}`));
      }

      const { error: upErr } = await supabase.storage.from('avatars').upload(path, file, { upsert: true });
      if (upErr) {
        console.error('[avatar] upload failed:', upErr);
        toast(t('profile.errors.uploadFailed'), 'error');
        return;
      }

      const { data: pub } = supabase.storage.from('avatars').getPublicUrl(path);
      // Cache-bust so the browser fetches the new image instead of the old one
      const publicUrl = `${pub.publicUrl}?t=${Date.now()}`;

      const { error: dbErr } = await updateProfile({ avatar_url: publicUrl });
      if (dbErr) {
        console.error('[avatar] profile update failed:', dbErr);
        toast(t('profile.errors.updateAvatarFailed'), 'error');
        return;
      }

      toast(t('profile.errors.avatarUpdated'), 'success');
    } catch (err) {
      console.error('[avatar] unexpected error:', err);
      toast(t('profile.errors.unexpected'), 'error');
    } finally {
      setUploadingAvatar(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleAvatarRemove = async () => {
    if (!profile?.avatar_url) return;
    setUploadingAvatar(true);
    try {
      const { data: existing } = await supabase.storage.from('avatars').list(user.id);
      if (existing && existing.length > 0) {
        await supabase.storage.from('avatars').remove(existing.map((f) => `${user.id}/${f.name}`));
      }
      const { error } = await updateProfile({ avatar_url: null });
      if (error) {
        console.error('[avatar] remove failed:', error);
        toast(t('profile.errors.deleteImageFailed'), 'error');
        return;
      }
      toast(t('profile.errors.imageDeleted'), 'success');
    } catch (err) {
      console.error('[avatar] unexpected error:', err);
      toast(t('profile.errors.unexpected'), 'error');
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await updateProfile({ full_name: fullName, phone, address });
    setSaving(false);
    if (error) {
      toast(t('profile.errors.saveError'), 'error');
    } else {
      toast(t('profile.errors.profileUpdated'), 'success');
      setEditing(false);
    }
  };

  // Recent wishlist products
  const wishlistProducts = wishlistIds
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 4);

  return (
    <>
      <div className="container-page py-8">
        <h1 className="mb-6 text-2xl font-extrabold text-neutral-800">{t('profile.title')}</h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile card */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl border border-neutral-100 bg-white p-6 text-center shadow-soft">
              {/* Avatar */}
              <div className="relative mx-auto h-24 w-24">
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={t('profile.avatarAlt')}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 text-3xl font-extrabold text-primary-700">
                    {(profile?.full_name ?? user.email ?? '?')[0]}
                  </div>
                )}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingAvatar}
                  className="absolute bottom-0 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white shadow-card transition hover:bg-primary-700 disabled:opacity-60"
                  aria-label={t('profile.changeImage')}
                >
                  {uploadingAvatar ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Camera className="h-3.5 w-3.5" />
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>

              {profile?.avatar_url && !uploadingAvatar && (
                <button
                  onClick={handleAvatarRemove}
                  className="mx-auto mt-3 flex items-center gap-1.5 text-xs font-medium text-error-600 transition hover:text-error-700"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  {t('profile.deleteImage')}
                </button>
              )}

              <h2 className="mt-4 text-lg font-bold text-neutral-800">
                {profile?.full_name ?? t('profile.user')}
              </h2>
              <p className="text-sm text-neutral-500">{user.email}</p>

              <div className="mt-6 space-y-2 text-right text-sm">
                {profile?.phone && (
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Phone className="h-4 w-4 text-neutral-400" />
                    {profile.phone}
                  </div>
                )}
                {profile?.address && (
                  <div className="flex items-center gap-2 text-neutral-600">
                    <MapPin className="h-4 w-4 text-neutral-400" />
                    {profile.address}
                  </div>
                )}
                <div className="flex items-center gap-2 text-neutral-600">
                  <Calendar className="h-4 w-4 text-neutral-400" />
                  {new Date(profile?.created_at ?? user.created_at).toLocaleDateString(dateLocale())}
                </div>
              </div>

              <button
                onClick={() => setEditing(true)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700"
              >
                <Edit2 className="h-4 w-4" />
                {t('profile.editProfile')}
              </button>

              <Link
                to="/orders"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 py-2.5 text-sm font-bold text-neutral-600 transition hover:bg-neutral-50"
              >
                <Package className="h-4 w-4" />
                {t('profile.myOrders')}
              </Link>

              <button
                onClick={() => setShowLogoutModal(true)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-error-200 py-2.5 text-sm font-bold text-error-600 transition hover:bg-error-50"
              >
                <LogOut className="h-4 w-4" />
                {t('common.logout')}
              </button>

              <button
                onClick={() => setShowDeleteModal(true)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-medium text-neutral-400 transition hover:text-error-600"
              >
                <Trash2 className="h-3.5 w-3.5" />
                {t('profile.deleteAccount')}
              </button>
            </div>
          </div>

          {/* Right column: recent orders + wishlist */}
          <div className="space-y-6 lg:col-span-2">
            {/* Recent orders */}
            <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-neutral-800">{t('profile.recentOrders')}</h2>
                <Link to="/orders" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                  {t('common.viewAll')}
                </Link>
              </div>

              {orders.length === 0 ? (
                <div className="py-8 text-center">
                  <Package className="mx-auto h-12 w-12 text-neutral-300" />
                  <p className="mt-3 text-sm text-neutral-400">{t('profile.noOrders')}</p>
                  <Link to="/" className="mt-4 inline-block text-sm font-medium text-primary-600">
                    {t('common.startShopping')}
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {orders.map((order) => (
                    <Link
                      key={order.id}
                      to="/orders"
                      className="flex items-center justify-between rounded-xl border border-neutral-100 p-3 transition hover:bg-neutral-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50">
                          <ShoppingBag className="h-5 w-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-neutral-700">{order.order_number}</p>
                          <p className="text-xs text-neutral-400">
                            {new Date(order.created_at).toLocaleDateString(dateLocale())}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary-50 px-3 py-1.5 text-sm font-bold text-primary-700 sm:text-base">
                          {t(`orders.status.${order.status}`, { defaultValue: order.status })}
                        </span>
                        <span className="text-sm font-bold text-primary-700">
                          {formatPrice(order.total)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Recent wishlist */}
            <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-neutral-800">{t('profile.recentWishlist')}</h2>
                <Link to="/wishlist" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                  {t('common.viewAll')}
                </Link>
              </div>

              {wishlistProducts.length === 0 ? (
                <div className="py-8 text-center">
                  <Heart className="mx-auto h-12 w-12 text-neutral-300" />
                  <p className="mt-3 text-sm text-neutral-400">{t('profile.noWishlist')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {wishlistProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="group overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                    >
                      <div className="aspect-square overflow-hidden bg-neutral-50">
                        <img
                          src={p.images[0]}
                          alt={tProductName(p.id)}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-2">
                        <p className="line-clamp-1 text-xs font-bold text-neutral-700">{tProductName(p.id)}</p>
                        <p className="text-xs font-extrabold text-primary-600">
                          {formatPrice(p.price)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit profile modal */}
      <AnimatePresence>
        {editing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={() => setEditing(false)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white p-6 shadow-float"
            >
              <h3 className="mb-4 text-lg font-extrabold text-neutral-800">{t('profile.editProfile')}</h3>
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('profile.fullName')}</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('profile.phone')}</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t('profile.address')}</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={2}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition focus:border-primary-400 focus:bg-white"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-600 py-2.5 font-bold text-white transition hover:bg-primary-700 disabled:opacity-60"
                >
                  <Check className="h-4 w-4" />
                  {saving ? t('profile.saving') : t('common.save')}
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="flex-1 rounded-full border border-neutral-200 py-2.5 font-bold text-neutral-600 transition hover:bg-neutral-50"
                >
                  {t('common.cancel')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Logout modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowLogoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-float"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error-50">
                <LogOut className="h-8 w-8 text-error-500" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-800">{t('profile.confirmLogout')}</h3>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={async () => {
                    await signOut();
                    setShowLogoutModal(false);
                    toast(t('profile.loggedOut'), 'info');
                    navigate('/');
                  }}
                  className="flex-1 rounded-full bg-error-500 py-2.5 font-bold text-white transition hover:bg-error-600"
                >
                  {t('profile.confirmLogoutBtn')}
                </button>
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 rounded-full border border-neutral-200 py-2.5 font-bold text-neutral-600 transition hover:bg-neutral-50"
                >
                  {t('common.cancel')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Delete account modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
            onClick={() => !deletingAccount && setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-float"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error-50">
                <AlertTriangle className="h-8 w-8 text-error-500" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-800">{t('profile.confirmDeleteTitle')}</h3>
              <p className="mt-2 text-sm text-neutral-500">
                {t('profile.confirmDeleteText1')}
                {t('profile.confirmDeleteText2')}
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={async () => {
                    setDeletingAccount(true);
                    try {
                      const { data, error } = await supabase.rpc('delete_own_account');
                      if (error) throw error;
                      if (data && data.success === false) {
                        throw new Error(data.error ?? t('profile.deleteFailed'));
                      }
                      // Clear all local state so nothing from the deleted
                      // account persists on this device.
                      clearCart();
                      clearWishlist([]);
                      try { localStorage.clear(); } catch { /* ignore */ }
                      try { sessionStorage.clear(); } catch { /* ignore */ }
                      await signOut();
                      setShowDeleteModal(false);
                      toast(t('profile.accountDeleted'), 'info');
                      navigate('/');
                    } catch (err) {
                      console.error('[delete-account]', err);
                      toast(t('profile.deleteFailed'), 'error');
                    } finally {
                      setDeletingAccount(false);
                    }
                  }}
                  disabled={deletingAccount}
                  className="flex-1 rounded-full bg-error-500 py-2.5 font-bold text-white transition hover:bg-error-600 disabled:opacity-60"
                >
                  {deletingAccount ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : t('profile.confirmDeleteBtn')}
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  disabled={deletingAccount}
                  className="flex-1 rounded-full border border-neutral-200 py-2.5 font-bold text-neutral-600 transition hover:bg-neutral-50 disabled:opacity-60"
                >
                  {t('common.cancel')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
