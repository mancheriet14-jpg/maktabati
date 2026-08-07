// Wishlist store (Zustand + persist).
// Local-only persistence via localStorage. The backend `favorites` table was
// removed when the schema was slimmed down to profiles/orders/order_items, so
// wishlist state lives entirely on the client for both guests and logged-in users.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  ids: string[];
  toggle: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  count: () => number;
  setIds: (ids: string[]) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],

      toggle: (productId) =>
        set((state) => {
          const exists = state.ids.includes(productId);
          return {
            ids: exists
              ? state.ids.filter((id) => id !== productId)
              : [...state.ids, productId],
          };
        }),

      isWishlisted: (productId) => get().ids.includes(productId),

      count: () => get().ids.length,

      setIds: (ids) => set({ ids }),
    }),
    { name: 'wishlist-storage' },
  ),
);
