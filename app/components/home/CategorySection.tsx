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
      {/* HORIZONTAL SCROLL */}
      <div
        className="
          flex gap-5 overflow-x-auto pb-3
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {data?.data.map((cat: Category) => {
          const isActive = selectedId === cat._id;

          return (
            <button
              key={cat._id}
              onClick={() => onSelect(cat._id)}
              className={`
                snap-start
                min-w-35
                h-37.5
                rounded-2xl
                border
                bg-white
                flex flex-col items-center justify-center
                gap-3
                transition-all duration-200
                hover:shadow-lg hover:-translate-y-0.5
                ${
                  isActive
                    ? "border-blue-600 ring-2 ring-blue-100"
                    : "border-gray-200"
                }
              `}
            >
              {/* IMAGE HOLDER */}
              <div
                className={`
                  h-16 w-16 rounded-full
                  flex items-center justify-center
                  transition
                  ${isActive ? "bg-blue-50" : "bg-gray-100"}
                `}
              >
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <span
                className={`
                  text-sm font-semibold text-center
                  ${isActive ? "text-blue-600" : "text-gray-700"}
                `}
              >
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
