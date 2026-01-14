"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { getProductById } from "@/services/product.service";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductReviews from "@/app/components/review/ProductReviews";
import SimilarProducts from "@/app/components/product/SimilarProducts";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  const product = data?.data;

  const [variantIndex, setVariantIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  if (isLoading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  const active = getActiveData(product, variantIndex);
  const images = active.images || [];

  const mainImage = images[imageIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT – IMAGE GALLERY */}
      <div className="flex gap-4">
        {/* THUMBNAILS */}
        <div className="flex flex-col gap-3">
          {images.map((img: string, i: number) => (
            <button
              key={i}
              onMouseEnter={() => setImageIndex(i)}
              onClick={() => setImageIndex(i)}
              className={`relative w-20 h-20 border rounded-lg bg-white overflow-hidden
                ${i === imageIndex ? "border-black" : "border-gray-200"}
              `}
            >
              <Image
                src={img}
                alt="thumb"
                fill
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="relative flex-1 aspect-square bg-gray-50 rounded-xl overflow-hidden">
          {mainImage && (
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-contain p-6"
              priority
            />
          )}

          {active.discount ? (
            <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded">
              {active.discount}% OFF
            </span>
          ) : null}
        </div>
      </div>

      {/* RIGHT – PRODUCT INFO */}
      <div>
        {/* BRAND */}
        {product.brand && (
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        )}

        {/* NAME */}
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

        {/* DESCRIPTION */}
        {product.description && (
          <p className="text-gray-600 mb-4">{product.description}</p>
        )}

        {/* PRICE */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl font-bold">₹{active.finalPrice}</span>

          {active.discount ? (
            <>
              <span className="text-lg line-through text-gray-400">
                ₹{active.price}
              </span>
              <span className="text-green-600 font-semibold">
                {active.discount}% off
              </span>
            </>
          ) : null}
        </div>

        {/* STOCK */}
        <p
          className={`text-sm font-medium mb-4 ${
            active.stockStatus === "IN_STOCK"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {active.stockStatus === "IN_STOCK" ? "In Stock" : "Out of Stock"}
        </p>

        {/* VARIANTS */}
        {product.hasVariants && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Select Variant</h3>

            <div className="flex gap-3 flex-wrap">
              {product.variants.map((v: any, i: number) => (
                <button
                  key={v._id}
                  onClick={() => {
                    setVariantIndex(i);
                    setImageIndex(0); // reset image
                  }}
                  className={`px-4 py-2 border rounded-lg text-sm transition
                    ${
                      i === variantIndex
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:border-black"
                    }`}
                >
                  {v.type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap mb-6">
          {product.tags?.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4">
          <Button size="lg" className="flex-1">
            Add to Cart
          </Button>
          <Button size="lg" variant="outline">
            Buy Now
          </Button>
        </div>
      </div>
      <div className="border">
        <SimilarProducts productId={product._id} />
      </div>

      <ProductReviews productId={product._id} />
    </div>
  );
}

/* 🔥 HELPER */
function getActiveData(product: any, variantIndex: number) {
  if (product.hasVariants && product.variants?.length) {
    const v = product.variants[variantIndex];
    return {
      images: v.images,
      price: v.price,
      finalPrice: v.finalPrice,
      discount: v.discount,
      stockStatus: v.stockStatus,
    };
  }

  return {
    images: product.images,
    price: product.price,
    finalPrice: product.finalPrice,
    discount: product.discount,
    stockStatus: product.stockStatus,
  };
}
