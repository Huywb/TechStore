import { create } from "zustand";



interface FilterState {
  filterCategories: string[];
  filterBrands: string[];
  filterPrices?: 'asc' | 'desc';

  toggleCategory: (value: string) => void;
  toggleBrand: (value: string) => void;
  togglePrice: (value: "asc" | "desc") => void;
  clearFilter: () => void;
}
export const useFilterStore = create<FilterState>((set) => ({
  filterCategories: [],
  filterBrands: [],
  filterPrices: 'asc',

  toggleCategory: (value) =>
    set((state) => ({
      filterCategories: state.filterCategories.includes(value)
        ? state.filterCategories.filter((item) => item !== value)
        : [...state.filterCategories, value],
    })),

  toggleBrand: (value) =>
    set((state) => ({
      filterBrands: state.filterBrands.includes(value)
        ? state.filterBrands.filter((item) => item !== value)
        : [...state.filterBrands, value],
    })),

  togglePrice: (value: "asc" | "desc") =>
    set({filterPrices: value}),

  clearFilter: () => set({ filterCategories: [], filterBrands: [], filterPrices: 'asc' }),
}));
