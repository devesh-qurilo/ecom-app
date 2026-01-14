// "use client";

// import { useSearchParams } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";

// import ProductFilters from "@/app/components/product/ProductFilters";
// import ProductGrid from "@/app/components/product/ProductGrid";
// import { getVisibleProducts, filterProducts } from "@/services/product.service";

// export default function ProductsPage() {
//   const params = useSearchParams();
//   const categoryId = params.get("categoryId") || "";
//   const subCategoryId = params.get("subCategoryId") || "";

//   const [filteredData, setFilteredData] = useState<any[] | null>(null);

//   const { data, isLoading } = useQuery({
//     queryKey: ["products", categoryId, subCategoryId],
//     queryFn: () => getVisibleProducts(categoryId, subCategoryId),
//   });

//   const products = filteredData ?? data?.data ?? [];

//   const applyFilters = async (payload: any) => {
//     const res = await filterProducts({
//       ...payload,
//       categoryId,
//       subCategoryId,
//     });
//     setFilteredData(res.data);
//   };

//   if (isLoading) return <p>Loading products...</p>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
//       {/* LEFT */}
//       <div className="md:col-span-1">
//         <ProductFilters onApply={applyFilters} />
//       </div>

//       {/* RIGHT */}
//       <div className="md:col-span-3">
//         <ProductGrid products={products} />
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { useProductFilterStore } from "@/app/store/useProductFilterStore";
// import DesktopFilters from "@/app/components/product/filters/DesktopFilters";
// import SortBar from "@/app/components/product/SortBar";
// import ProductGrid from "@/app/components/product/ProductGrid";
// import { filterProducts } from "@/services/product.service";

// export default function ProductsPage() {
//   const filters = useProductFilterStore();

//   const { data, isLoading } = useQuery({
//     queryKey: ["filtered-products", filters],
//     queryFn: () =>
//       filterProducts({
//         ...filters,
//         minPrice: filters.minPrice || undefined,
//         maxPrice: filters.maxPrice || undefined,
//       }),
//   });

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
//       {/* LEFT */}
//       <div className="hidden md:block md:col-span-1">
//         <DesktopFilters />
//       </div>

//       {/* RIGHT */}
//       <div className="md:col-span-3">
//         <SortBar />
//         <ProductGrid products={data?.data || []} />
//       </div>
//     </div>
//   );
// }

"use client";

import { useQuery } from "@tanstack/react-query";
import { useProductFilterStore } from "@/app/store/useProductFilterStore";
import DesktopFilters from "@/app/components/product/filters/DesktopFilters";
import ProductGrid from "@/app/components/product/ProductGrid";
import SortBar from "@/app/components/product/SortBar";
import { filterProducts } from "@/services/product.service";
import MobileFilterDrawer from "@/app/components/product/filters/MobileFilterDrawer";

export default function ProductsPage() {
  const filters = useProductFilterStore();

  const { data, isLoading } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => filterProducts(filters),
  });

  if (isLoading) return <p>Loading products...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* LEFT */}
      <div className="hidden md:block">
        <DesktopFilters />
      </div>

      {/* RIGHT */}
      <div className="md:col-span-3">
        <MobileFilterDrawer />
        <SortBar />
        <ProductGrid products={data?.data || []} />
      </div>
    </div>
  );
}
