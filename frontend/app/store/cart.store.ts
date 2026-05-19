import { Product } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  items: CartItem[];
  subTotal: number;
  total: number;

  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  deleteCartProduct: (productId: string) => void;

  resetCart: () => void;

  getTotalPrice: () => number;
  getSubTotalPrice: () => number;

  getItemCount: (productId: string) => number;
  getGroupItems: () => CartItem[];

  // favorite
  favoriteProduct: Product[];
  addRemoveToFavorite: (product: Product) => void;
  resetFavorite: () => void;
}

const calculateSubTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    const price = (item.product.price ?? 0) * item.quantity;

    const discount =
      (price * (item.product.discount ?? 0)) / 100;

    return sum + (price + discount);
  }, 0);
};

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    return sum + (item.product.price ?? 0) * item.quantity;
  }, 0);
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      items: [],
      subTotal: 0,
      total: 0,

      // favorite
      favoriteProduct: [],

      addItem: (product) =>
        set((state) => {
          const existing = state.items.find(
            (item) => item.product._id === product._id,
          );

          let updatedItems: CartItem[];

          if (existing) {
            updatedItems = state.items.map((item) =>
              item.product._id === product._id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            );
          } else {
            updatedItems = [
              ...state.items,
              {
                product,
                quantity: 1,
              },
            ];
          }

          return {
            items: updatedItems,
            subTotal: calculateSubTotal(updatedItems),
            total: calculateTotal(updatedItems),
          };
        }),

      removeItem: (productId) =>
        set((state) => {
          const updatedItems = state.items.reduce(
            (acc, item) => {
              if (item.product._id === productId) {
                if (item.quantity > 1) {
                  acc.push({
                    ...item,
                    quantity: item.quantity - 1,
                  });
                }
              } else {
                acc.push(item);
              }

              return acc;
            },
            [] as CartItem[],
          );

          return {
            items: updatedItems,
            subTotal: calculateSubTotal(updatedItems),
            total: calculateTotal(updatedItems),
          };
        }),

      deleteCartProduct: (productId) =>
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.product._id !== productId,
          );

          return {
            items: updatedItems,
            subTotal: calculateSubTotal(updatedItems),
            total: calculateTotal(updatedItems),
          };
        }),

      resetCart: () =>
        set({
          items: [],
          subTotal: 0,
          total: 0,
        }),

      getTotalPrice: () => {
        return calculateTotal(get().items);
      },

      getSubTotalPrice: () => {
        return calculateSubTotal(get().items);
      },

      getItemCount: (productId) => {
        const item = get().items.find(
          (item) => item.product._id === productId,
        );

        return item ? item.quantity : 0;
      },

      getGroupItems: () => get().items,

      addRemoveToFavorite: (product: Product) =>
        set((state) => {
          const existing = state.favoriteProduct.find(
            (item) => item._id === product._id,
          );

          if (existing) {
            return {
              favoriteProduct: state.favoriteProduct.filter(
                (item) => item._id !== product._id,
              ),
            };
          }

          return {
            favoriteProduct: [
              ...state.favoriteProduct,
              product,
            ],
          };
        }),

      resetFavorite: () =>
        set({
          favoriteProduct: [],
        }),
    }),
    {
      name: "cart",
    },
  ),
);