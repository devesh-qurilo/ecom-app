"use client";

import { useState } from "react";
import CategorySection from "@/app/components/home/CategorySection";
import SubCategorySection from "@/app/components/home/SubCategorySection";
import BannerCarousel from "../components/home/BannerCarousel";

export default function PublicHomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <BannerCarousel />
      <section>
        <h1 className="text-2xl font-bold mb-4">Shop by Category</h1>

        <CategorySection
          selectedId={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </section>

      <SubCategorySection categoryId={selectedCategory!} />
    </div>
  );
}
