import { create } from 'zustand';

export const useCartStore = create((set) => ({
  quantities: {},
  setQuantity: (productId, qty) =>
    set((state) => ({
      quantities: { ...state.quantities, [productId]: qty },
    })),
  totalItems: 0,
  updateTotal: () =>
    set((state) => {
      const total = Object.values(state.quantities).reduce((a, b) => a + b, 0);
      return { totalItems: total };
    }),
    
    getTotalItems: (state) =>
        Object.values(state.quantities).reduce((a, b) => a + b, 0),
}));
