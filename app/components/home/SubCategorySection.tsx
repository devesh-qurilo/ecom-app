"use client";

import { useQuery } from "@tanstack/react-query";
import { getSubCategories } from "@/services/category.service";
import Image from "next/image";

interface SubCategory {
  _id: string;
  name: string;
  icon: string;
}

export default function SubCategorySection({
  categoryId,
}: {
  categoryId: string;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["subcategories", categoryId],
    queryFn: () => getSubCategories(categoryId),
    enabled: !!categoryId,
  });

  if (!categoryId) return null;
  if (isLoading) return <p>Loading subcategories...</p>;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Explore Sub Categories</h2>

      {/* HORIZONTAL SCROLL */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-2
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {data.data.map((sub: SubCategory) => (
          <button
            key={sub._id}
            className="
              snap-start
              min-w-[120px]
              rounded-xl
              border border-gray-200
              bg-white
              p-4
              flex flex-col items-center gap-2
              transition
              hover:shadow-md hover:border-blue-600
            "
          >
            <Image
              src={sub.icon}
              alt={sub.name}
              width={48}
              height={48}
              className="object-contain"
            />

            <span className="text-sm font-medium text-center">{sub.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
