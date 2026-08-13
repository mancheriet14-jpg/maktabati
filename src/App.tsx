// App router. All routes share the Layout (header + footer).
// Auth routes (login, signup, forgot password) are outside the layout for a focused experience.
// All pages are lazy-loaded to reduce the initial JS bundle and improve LCP/TBT.

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/lib/auth';
import { ToastContainer } from '@/lib/toast';
import Layout from '@/components/layout/Layout';
import { ProductGridSkeleton } from '@/components/ui/Skeleton';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CategoryPage = lazy(() => import('@/pages/CategoryPage'));
const SubCategoryPage = lazy(() => import('@/pages/SubCategoryPage'));
const BagCollectionPage = lazy(() => import('@/pages/BagCollectionPage'));
const ProductPage = lazy(() => import('@/pages/ProductPage'));
const CartPage = lazy(() => import('@/pages/CartPage'));
const WishlistPage = lazy(() => import('@/pages/WishlistPage'));
const OffersPage = lazy(() => import('@/pages/OffersPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const SignupPage = lazy(() => import('@/pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const OrdersPage = lazy(() => import('@/pages/OrdersPage'));
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));
const OrderSuccessPage = lazy(() => import('@/pages/OrderSuccessPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Suspense fallback={<ProductGridSkeleton />}><HomePage /></Suspense>} />
            <Route path="/category/:slug" element={<Suspense fallback={<ProductGridSkeleton />}><CategoryPage /></Suspense>} />
            <Route path="/subcategory/:slug" element={<Suspense fallback={<ProductGridSkeleton />}><SubCategoryPage /></Suspense>} />
            <Route path="/bag-collection/:slug" element={<Suspense fallback={<ProductGridSkeleton />}><BagCollectionPage /></Suspense>} />
            <Route path="/product/:id" element={<Suspense fallback={<ProductGridSkeleton />}><ProductPage /></Suspense>} />
            <Route path="/cart" element={<Suspense fallback={<ProductGridSkeleton />}><CartPage /></Suspense>} />
            <Route path="/wishlist" element={<Suspense fallback={<ProductGridSkeleton />}><WishlistPage /></Suspense>} />
            <Route path="/offers" element={<Suspense fallback={<ProductGridSkeleton />}><OffersPage /></Suspense>} />
            <Route path="/search" element={<Suspense fallback={<ProductGridSkeleton />}><SearchPage /></Suspense>} />
            <Route path="/profile" element={<Suspense fallback={<ProductGridSkeleton />}><ProfilePage /></Suspense>} />
            <Route path="/orders" element={<Suspense fallback={<ProductGridSkeleton />}><OrdersPage /></Suspense>} />
            <Route path="/checkout" element={<Suspense fallback={<ProductGridSkeleton />}><CheckoutPage /></Suspense>} />
            <Route path="/order-success" element={<Suspense fallback={<ProductGridSkeleton />}><OrderSuccessPage /></Suspense>} />
            <Route path="*" element={<Suspense fallback={null}><NotFoundPage /></Suspense>} />
          </Route>
          {/* Auth pages — outside layout */}
          <Route path="/login" element={<Suspense fallback={null}><LoginPage /></Suspense>} />
          <Route path="/signup" element={<Suspense fallback={null}><SignupPage /></Suspense>} />
          <Route path="/forgot-password" element={<Suspense fallback={null}><ForgotPasswordPage /></Suspense>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}
