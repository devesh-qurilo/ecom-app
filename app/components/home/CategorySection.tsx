"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category.service";
import Image from "next/image";

interface Category {
  _id: string;
  name: string;
  icon: string;
}

export default function CategorySection({
  onSelect,
  selectedId,
}: {
  onSelect: (id: string) => void;
  selectedId: string | null;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="relative">
      {/* HORIZONTAL SCROLL CONTAINER */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-2 
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {data?.data.map((cat: Category) => (
          <button
            key={cat._id}
            onClick={() => onSelect(cat._id)}
            className={`
              snap-start
              min-w-[120px]
              rounded-xl p-4
              flex flex-col items-center gap-2
              transition
              hover:shadow-md
              ${
                selectedId === cat._id
                  ? "border-2 border-blue-600 bg-blue-50"
                  : "border border-gray-200 bg-white"
              }
            `}
          >
            <Image
              src={cat.icon}
              alt={cat.name}
              width={56}
              height={56}
              className="object-contain"
            />

            <span className="text-sm font-medium text-center">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
