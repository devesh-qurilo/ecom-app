"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSubCategories } from "@/services/category.service";
import Image from "next/image";

export default function SubCategorySection({
  categoryId,
}: {
  categoryId: string;
}) {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["subcategories", categoryId],
    queryFn: () => getSubCategories(categoryId),
    enabled: !!categoryId,
  });

  if (!categoryId) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Explore Sub Categories</h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {data?.data.map((sub: any) => (
          <button
            key={sub._id}
            onClick={() =>
              router.push(
                `/products?categoryId=${categoryId}&subCategoryId=${sub._id}`
              )
            }
            className="min-w-30 rounded-xl border bg-white p-4 hover:border-blue-600 hover:shadow"
          >
            <Image src={sub.icon} alt={sub.name} width={48} height={48} />
            <p className="text-sm mt-2 font-medium text-center">{sub.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
