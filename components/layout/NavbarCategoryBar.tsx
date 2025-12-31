"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/category.service";

export default function NavbarCategoryBar() {
  const { data, isLoading } = useQuery({
    queryKey: ["navbar-categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <div className="h-12 flex items-center px-10 text-sm text-gray-400">
        Loading categories…
      </div>
    );
  }

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-[1600px] mx-auto px-10">
        <ul className="flex gap-10 h-12 items-center text-sm font-semibold overflow-x-auto">
          {data.data.map((cat: any) => (
            <li key={cat._id}>
              <Link
                href={`/products?category=${cat._id}`}
                className="relative whitespace-nowrap hover:text-blue-600 transition
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:w-0 after:bg-blue-600 after:transition-all
                  hover:after:w-full"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
