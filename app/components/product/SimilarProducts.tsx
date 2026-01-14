"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { getSimilarProducts } from "@/services/product.service";

export default function SimilarProducts({ productId }: { productId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["similar-products", productId],
    queryFn: () => getSimilarProducts(productId),
  });

  if (isLoading) return null;

  const products = data?.data || [];

  if (!products.length) return null;

  return (
    <section className="mt-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Similar Products</h2>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {products.map((product: any) => (
          <div key={product._id} className="snap-start min-w-[200px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
