"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProductFilters({
  onApply,
}: {
  onApply: (p: any) => void;
}) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [stockStatus, setStockStatus] = useState("");

  return (
    <div className="border rounded-xl p-4 sticky top-24">
      <h3 className="font-semibold mb-4">Filters</h3>

      {/* PRICE */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Price</p>
        <div className="flex gap-2">
          <input
            placeholder="Min"
            className="border p-1 w-full rounded"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            placeholder="Max"
            className="border p-1 w-full rounded"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* STOCK */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Availability</p>
        <select
          className="border rounded w-full p-1"
          value={stockStatus}
          onChange={(e) => setStockStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="IN_STOCK">In Stock</option>
          <option value="OUT_OF_STOCK">Out of Stock</option>
        </select>
      </div>

      <Button
        className="w-full"
        onClick={() =>
          onApply({
            minPrice: minPrice ? Number(minPrice) : undefined,
            maxPrice: maxPrice ? Number(maxPrice) : undefined,
            stockStatus,
          })
        }
      >
        Apply Filters
      </Button>
    </div>
  );
}
