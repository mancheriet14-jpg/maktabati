// Cart store (Zustand + persist). Designed to swap mock data for Supabase
// in Phase 2 without touching component code.
// Supports product variants — each cart line is keyed by product+variant.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, ProductVariant } from '@/types';

interface CartState {
  items: CartItem[];
  wilaya: string | null;
  setWilaya: (wilaya: string | null) => void;
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clear: () => void;
  totalItems: () => number;
  totalPrice: () => number;
  isInCart: (productId: string, variantId?: string) => boolean;
}

const lineKey = (productId: string, variantId?: string) =>
  `${productId}::${variantId ?? ''}`;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      wilaya: null,

      setWilaya: (wilaya) => set({ wilaya }),

      addItem: (product, quantity = 1, variant) =>
        set((state) => {
          const key = lineKey(product.id, variant?.id);
          const existing = state.items.find(
            (i) => lineKey(i.product.id, i.variant?.id) === key,
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                lineKey(i.product.id, i.variant?.id) === key
                  ? { ...i, quantity: i.quantity + quantity }
                  : i,
              ),
            };
          }
          return { items: [...state.items, { product, quantity, variant }] };
        }),

      removeItem: (productId, variantId) =>
        set((state) => ({
          items: state.items.filter(
            (i) => lineKey(i.product.id, i.variant?.id) !== lineKey(productId, variantId),
          ),
        })),

      updateQuantity: (productId, quantity, variantId) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter(
                  (i) => lineKey(i.product.id, i.variant?.id) !== lineKey(productId, variantId),
                )
              : state.items.map((i) =>
                  lineKey(i.product.id, i.variant?.id) === lineKey(productId, variantId)
                    ? { ...i, quantity }
                    : i,
                ),
        })),

      clear: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (sum, i) => sum + (i.variant?.price ?? i.product.price) * i.quantity,
          0,
        ),

      isInCart: (productId, variantId) =>
        get().items.some(
          (i) => lineKey(i.product.id, i.variant?.id) === lineKey(productId, variantId),
        ),
    }),
    { name: 'cart-storage' },
  ),
);
