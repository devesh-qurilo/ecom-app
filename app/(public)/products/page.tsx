"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/product.service";

export default function ProductsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((p: any) => (
        <div key={p.id} className="border p-4">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
