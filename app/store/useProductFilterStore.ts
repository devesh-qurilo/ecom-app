import { create } from "zustand";

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100000;

export const useProductFilterStore = create<any>((set) => ({
  categoryId: "",
  minPrice: DEFAULT_MIN,
  maxPrice: DEFAULT_MAX,
  brands: [],
  tags: [],
  stockStatus: "",
  sortBy: "",
  page: 1,

  setValue: (key: string, value: any) => set(() => ({ [key]: value, page: 1 })),

  toggleArray: (key: string, value: string) =>
    set((state: any) => ({
      [key]: state[key].includes(value)
        ? state[key].filter((v: string) => v !== value)
        : [...state[key], value],
      page: 1,
    })),

  clearAll: () =>
    set({
      minPrice: DEFAULT_MIN,
      maxPrice: DEFAULT_MAX,
      brands: [],
      tags: [],
      stockStatus: "",
      sortBy: "",
      page: 1,
    }),
}));
