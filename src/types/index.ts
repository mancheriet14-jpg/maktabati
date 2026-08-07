// Core domain types shared across the app.
// Designed to map cleanly onto a future Supabase schema.

export type MainCategorySlug =
  | 'stationery'
  | 'textbooks'
  | 'books'
  | 'toys'
  | 'gifts'
  | 'electronics'
  | 'aprons';

export interface MainCategory {
  slug: MainCategorySlug;
  name: string;
  image: string;
}

export interface SubCategory {
  slug: string;
  name: string;
  image: string;
}

export interface Brand {
  slug: string;
  name: string;
  image: string;
}

// A single product variant (color, size, model, etc.).
// Each variant can have its own price, stock, images, and SKU.
export interface ProductVariant {
  id: string;
  name: string; // e.g. "غلاف أسود" or "A4"
  optionLabel?: string; // e.g. "اللون" or "الحجم" — shown as group label
  price: number;
  oldPrice?: number;
  stock?: number;
  sku?: string;
  images?: string[]; // variant-specific images
}

export interface Product {
  id: string;
  sku?: string;
  name: string;
  mainCategory: MainCategorySlug;
  subCategory: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  images: string[];
  gallery?: string[];
  description: string;
  specs: { label: string; value: string }[];
  stock?: number;
  bagCollection?: string;
  variants?: ProductVariant[];
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: ProductVariant;
}

// A single customer review/comment on a product (stored in the reviews DB).
export interface Review {
  id: string;
  product_id: string;
  user_id: string | null;
  customer_name: string;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
}

// Aggregate rating for a product, computed dynamically from reviews.
export interface ReviewSummary {
  avg_rating: number;
  review_count: number;
}

export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'rating';

// Order + order_items as stored in Supabase public.orders / public.order_items.
// Customer info and per-item snapshot data are stored on the rows themselves so
// historical orders remain readable even if the source product is changed or removed.
export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_image: string | null;
  quantity: number;
  price: number;
  old_price: number | null;
  total_price: number | null;
  variant_id: string | null;
  variant_name: string | null;
  variant_option_label: string | null;
  variant_sku: string | null;
  color: string | null;
  size: string | null;
  sku: string | null;
  created_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  user_id: string | null;
  full_name: string;
  phone: string;
  customer_email: string | null;
  wilaya: string;
  commune: string | null;
  address: string;
  postal_code: string | null;
  country: string | null;
  notes: string | null;
  status: string;
  subtotal: number;
  delivery_fee: number;
  shipping_cost: number | null;
  total: number;
  created_at: string;
  order_items?: OrderItem[];
}
