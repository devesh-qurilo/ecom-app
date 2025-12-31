"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getBanners } from "@/services/banner.service";

interface BannerImage {
  _id: string;
  url: string;
}

export default function BannerCarousel() {
  const { data, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  const images: BannerImage[] = data?.data?.flatMap((b: any) => b.images) || [];

  const [current, setCurrent] = useState(0);

  // 🔥 Auto scroll
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (isLoading) return null;
  if (!images.length) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img) => (
          <div
            key={img._id}
            className="min-w-full h-[180px] md:h-[320px] relative"
          >
            <Image
              src={img.url}
              alt="Banner"
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
