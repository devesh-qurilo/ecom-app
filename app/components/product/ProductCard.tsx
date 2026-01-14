import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Product {
  _id: string;
  name: string;
  brand?: string;
  images?: string[];
  hasVariants: boolean;
  price?: number;
  finalPrice?: number;
  discount?: number;
  variants?: any[];
  stockStatus: string;
}

export default function ProductCard({ product }: { product: Product }) {
  // IMAGE PICK
  const image =
    product.hasVariants && product.variants?.length
      ? product.variants[0].images?.[0]
      : product.images?.[0];

  // PRICE PICK
  const price = product.hasVariants
    ? product.variants?.[0]?.price
    : product.price;

  const finalPrice = product.hasVariants
    ? product.variants?.[0]?.finalPrice
    : product.finalPrice;

  const discount = product.hasVariants
    ? product.variants?.[0]?.discount
    : product.discount;

  return (
    <Link
      href={`/products/${product._id}`}
      className="
        group
        block
        w-50
        h-85          /* 🔒 FIXED HEIGHT */
        rounded-2xl
        bg-white
        border
        hover:shadow-xl
        transition-all
        duration-300
        overflow-hidden
      "
    >
      {/* IMAGE AREA (FIXED) */}
      <div className="relative h-45 bg-gray-50">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="200px"
            className="
              object-contain
              p-4
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        ) : (
          <div className="h-full flex items-center justify-center text-sm text-gray-400">
            No Image
          </div>
        )}

        {/* DISCOUNT BADGE */}
        {discount ? (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        ) : null}
      </div>

      {/* CONTENT AREA */}
      <div className="flex flex-col justify-between h-[160px] p-4">
        {/* TOP CONTENT */}
        <div>
          {product.brand && (
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 truncate">
              {product.brand}
            </p>
          )}

          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* BOTTOM CONTENT (PINNED) */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{finalPrice}
            </span>

            {discount ? (
              <span className="text-sm text-gray-400 line-through">
                ₹{price}
              </span>
            ) : null}
          </div>

          <div className="flex items-center justify-between mt-1">
            <span
              className={`text-xs font-medium ${
                product.stockStatus === "IN_STOCK"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product.stockStatus === "IN_STOCK" ? "In Stock" : "Out of Stock"}
            </span>

            <Badge variant="secondary" className="text-xs">
              View
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
