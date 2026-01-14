"use client";

import { useProductFilterStore } from "@/app/store/useProductFilterStore";

export default function SortBar() {
  const { sortBy, setFilter } = useProductFilterStore();

  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-medium">Sort by</span>

      {[
        { label: "Popularity", value: "popular" },
        { label: "Price -- Low to High", value: "price_asc" },
        { label: "Price -- High to Low", value: "price_desc" },
      ].map((s) => (
        <button
          key={s.value}
          onClick={() => setFilter("sortBy", s.value)}
          className={`text-sm ${
            sortBy === s.value ? "text-blue-600 font-semibold" : "text-gray-600"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
