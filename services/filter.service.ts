const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/api/user/categories`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getBrands() {
  const res = await fetch(`${BASE_URL}/api/brands`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getTags() {
  const res = await fetch(`${BASE_URL}/api/tags`, {
    cache: "no-store",
  });
  return res.json();
}
