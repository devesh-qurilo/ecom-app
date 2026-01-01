"use client";

import { useState } from "react";

import BannerCarousel from "@/app/components/home/BannerCarousel";
import CategorySection from "@/app/components/home/CategorySection";
import SubCategorySection from "@/app/components/home/SubCategorySection";

import ProductSection from "@/app/components/product/ProductSection";

import {
  getLatestProducts,
  getBestSellerProducts,
  getTopRatedProducts,
  getDiscountProducts,
  getDealOfDayProducts,
} from "@/services/product.service";

export default function PublicHomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* 🔥 Banner */}
      <BannerCarousel />

      {/* 🗂 Categories */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Shop by Category</h1>

        <CategorySection
          selectedId={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </section>

      {/* 📁 Sub Categories */}
      <SubCategorySection categoryId={selectedCategory!} />

      {/* 🆕 Latest */}
      <ProductSection
        title="Latest Products"
        queryKey={["latest-products"]}
        queryFn={getLatestProducts}
        viewAllHref="/products/latest"
      />

      {/* ⭐ Best Seller */}
      <ProductSection
        title="Best Sellers"
        queryKey={["best-seller-products"]}
        queryFn={getBestSellerProducts}
        viewAllHref="/products/best-seller"
      />

      {/* 🌟 Top Rated */}
      <ProductSection
        title="Top Rated"
        queryKey={["top-rated-products"]}
        queryFn={getTopRatedProducts}
        viewAllHref="/products/top-rated"
      />

      {/* 💸 Discounts */}
      <ProductSection
        title="Big Discounts"
        queryKey={["discount-products"]}
        queryFn={getDiscountProducts}
        viewAllHref="/products/discounts"
      />

      {/* 🔥 Deal of the Day */}
      <ProductSection
        title="Deal of the Day 🔥"
        queryKey={["deal-of-day-products"]}
        queryFn={getDealOfDayProducts}
      />
    </div>
  );
}
