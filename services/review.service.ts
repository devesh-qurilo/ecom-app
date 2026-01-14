const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductReviews(productId: string) {
  const res = await fetch(`${BASE_URL}/api/user/reviews/${productId}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch reviews");
  return res.json();
}
