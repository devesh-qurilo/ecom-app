const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getBanners() {
  const res = await fetch(`${BASE_URL}/api/user/banners`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch banners");
  return res.json();
}
