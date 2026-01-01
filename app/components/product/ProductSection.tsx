"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

interface Props {
  title: string;
  queryKey: string[];
  queryFn: () => Promise<any>;
  viewAllHref?: string;
}

export default function ProductSection({
  title,
  queryKey,
  queryFn,
  viewAllHref,
}: Props) {
  const { data, isLoading } = useQuery({
    queryKey,
    queryFn,
  });

  if (isLoading) return null;
  if (!data?.data?.length) return null;

  return (
    <section className="mt-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        {viewAllHref && (
          <a
            href={viewAllHref}
            className="text-sm text-blue-600 font-medium hover:underline"
          >
            View all
          </a>
        )}
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
          <div key={product._id} className="snap-start min-w-[200px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
