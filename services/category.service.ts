const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/api/user/categories`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getSubCategories(categoryId: string) {
  const res = await fetch(`${BASE_URL}/api/user/subcategories/${categoryId}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch subcategories");
  return res.json();
}
