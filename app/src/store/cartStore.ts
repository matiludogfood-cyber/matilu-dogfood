import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, DogProfile } from '@/types';

interface CartState {
  items: CartItem[];
  dogProfiles: DogProfile[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  addDogProfile: (profile: DogProfile) => void;
  removeDogProfile: (profileId: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      dogProfiles: [],

      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find(
          (i) => i.productId === item.productId && i.variant.id === item.variant.id
        );

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === existingItem.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...items, item] });
        }
      },

      removeItem: (itemId) => {
        set({ items: get().items.filter((i) => i.id !== itemId) });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.variant.price * item.quantity,
          0
        );
      },

      addDogProfile: (profile) => {
        set({ dogProfiles: [...get().dogProfiles, profile] });
      },

      removeDogProfile: (profileId) => {
        set({
          dogProfiles: get().dogProfiles.filter((p) => p.id !== profileId),
        });
      },
    }),
    {
      name: 'matilu-cart-storage',
    }
  )
);
