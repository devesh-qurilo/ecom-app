"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useProductFilterStore } from "@/app/store/useProductFilterStore";
import { getCategories, getBrands, getTags } from "@/services/filter.service";
import { Slider } from "@/components/ui/slider";

const MIN = 0;
const MAX = 100000;

export default function DesktopFilters() {
  const filter = useProductFilterStore();

  // 🔥 local slider state (Flipkart style)
  const [priceRange, setPriceRange] = useState<[number, number]>([
    filter.minPrice,
    filter.maxPrice,
  ]);

  // reset slider when filters cleared
  useEffect(() => {
    setPriceRange([filter.minPrice, filter.maxPrice]);
  }, [filter.minPrice, filter.maxPrice]);

  const { data: categoryRes } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: brandRes } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  const { data: tagRes } = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
  });

  return (
    <div className="border rounded-xl p-4 space-y-6 sticky top-24">
      {/* HEADER */}
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">Filters</h3>
        <button onClick={filter.clearAll} className="text-sm text-blue-600">
          Clear
        </button>
      </div>

      {/* CATEGORY */}
      <div>
        <p className="font-semibold mb-2">Category</p>
        <div className="space-y-2">
          {categoryRes?.data.map((cat: any) => (
            <label key={cat._id} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                checked={filter.categoryId === cat._id}
                onChange={() => filter.setValue("categoryId", cat._id)}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ PRICE RANGE – FIXED */}
      <div>
        <p className="font-semibold mb-2">Price Range</p>

        <Slider
          value={priceRange}
          min={MIN}
          max={MAX}
          step={100}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          onValueCommit={([min, max]) => {
            filter.setValue("minPrice", min);
            filter.setValue("maxPrice", max);
          }}
        />

        <div className="flex justify-between text-sm mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      {/* BRANDS */}
      <div>
        <p className="font-semibold mb-2">Popular Brands</p>
        <div className="space-y-2">
          {brandRes?.data.map((b: any) => (
            <label key={b._id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filter.brands.includes(b.name)}
                onChange={() => filter.toggleArray("brands", b.name)}
              />
              {b.name}
            </label>
          ))}
        </div>
      </div>

      {/* TAGS */}
      <div>
        <p className="font-semibold mb-2">Popular Tags</p>
        <div className="flex flex-wrap gap-2">
          {tagRes?.data.map((t: any) => (
            <button
              key={t._id}
              onClick={() => filter.toggleArray("tags", t.name)}
              className={`px-3 py-1 text-sm rounded border ${
                filter.tags.includes(t.name)
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
