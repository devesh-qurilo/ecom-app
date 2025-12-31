const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/products/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
