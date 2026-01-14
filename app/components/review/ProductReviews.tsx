"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getProductReviews } from "@/services/review.service";
import StarRating from "./StarRating";

export default function ProductReviews({ productId }: { productId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getProductReviews(productId),
  });

  if (isLoading) return null;

  const reviews = data?.data || [];

  if (!reviews.length) {
    return (
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-2">Ratings & Reviews</h2>
        <p className="text-gray-500 text-sm">No reviews yet</p>
      </div>
    );
  }

  const avgRating =
    reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / reviews.length;

  return (
    <section className="mt-12">
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">Ratings & Reviews</h2>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl font-bold">{avgRating.toFixed(1)}</span>
          <StarRating rating={Math.round(avgRating)} />
          <span className="text-sm text-gray-500">
            ({reviews.length} reviews)
          </span>
        </div>
      </div>

      {/* REVIEWS LIST */}
      <div className="space-y-6">
        {reviews.map((review: any) => (
          <div key={review._id} className="border rounded-xl p-4 bg-white">
            {/* USER */}
            <div className="flex items-center gap-3 mb-2">
              <Image
                src={review.userId.profileImage}
                alt={review.userId.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{review.userId.name}</p>
                <StarRating rating={review.rating} />
              </div>
            </div>

            {/* COMMENT */}
            <p className="text-gray-700 text-sm mb-2">{review.comment}</p>

            {/* REVIEW IMAGES */}
            {review.images?.length > 0 && (
              <div className="flex gap-3 mt-2">
                {review.images.map((img: string, i: number) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 border rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt="review image"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* DATE */}
            <p className="text-xs text-gray-400 mt-2">
              {new Date(review.createdAt).toDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
