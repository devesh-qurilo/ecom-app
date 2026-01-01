"use client";

import { useQuery } from "@tanstack/react-query";
import { getLatestProducts } from "@/services/product.service";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: ["latest-products"],
    queryFn: getLatestProducts,
  });

  if (isLoading) return <p>Loading products...</p>;

  return (
    <section className="mt-10">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Latest Products</h2>
        <span className="text-sm text-blue-600 cursor-pointer">View All</span>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {data.data.map((product: any) => (
          <div key={product._id} className="snap-start min-w-45 sm:min-w-55">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
