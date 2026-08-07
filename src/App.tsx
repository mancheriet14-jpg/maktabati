// App router. All routes share the Layout (header + footer).
// Auth routes (login, signup, forgot password) are outside the layout for a focused experience.

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/lib/auth';
import { ToastContainer } from '@/lib/toast';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import SubCategoryPage from '@/pages/SubCategoryPage';
import BagCollectionPage from '@/pages/BagCollectionPage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import WishlistPage from '@/pages/WishlistPage';
import OffersPage from '@/pages/OffersPage';
import SearchPage from '@/pages/SearchPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import ProfilePage from '@/pages/ProfilePage';
import OrdersPage from '@/pages/OrdersPage';
import CheckoutPage from '@/pages/CheckoutPage';
import OrderSuccessPage from '@/pages/OrderSuccessPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/subcategory/:slug" element={<SubCategoryPage />} />
          <Route path="/bag-collection/:slug" element={<BagCollectionPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Auth pages — outside layout */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}
