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

export async function getLatestProducts() {
  const res = await fetch(`${BASE_URL}/api/user/products/latest`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getBestSellerProducts() {
  const res = await fetch(`${BASE_URL}/api/user/products/best-seller`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch best sellers");
  return res.json();
}

export async function getTopRatedProducts() {
  const res = await fetch(`${BASE_URL}/api/user/products/top-rated`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch top rated");
  return res.json();
}

export async function getDiscountProducts() {
  const res = await fetch(`${BASE_URL}/api/user/products/discounts`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch discount products");
  return res.json();
}

export async function getDealOfDayProducts() {
  const res = await fetch(`${BASE_URL}/api/user/products/deal-of-day`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch deal of the day");
  return res.json();
}

export async function getProductById(productId: string) {
  const res = await fetch(`${BASE_URL}/api/user/products/${productId}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getSimilarProducts(productId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/products/${productId}/similar`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch similar products");
  return res.json();
}

export async function getVisibleProducts(
  categoryId?: string,
  subCategoryId?: string
) {
  const params = new URLSearchParams();
  if (categoryId) params.append("categoryId", categoryId);
  if (subCategoryId) params.append("subCategoryId", subCategoryId);

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/api/user/products/visible?${params.toString()}`,
    { cache: "no-store" }
  );

  return res.json();
}

export async function filterProducts(payload: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/products/filter`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

// export async function filterProducts(payload: any) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/user/products/filter`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     }
//   );

//   return res.json();
// }
