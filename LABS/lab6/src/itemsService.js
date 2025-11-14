const BASE = "https://dummyjson.com/products";

async function safeFetch(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export async function search(q = "") {
  const query = q?.trim();
  if (!query) {
    // fetch first page to show something when q is empty
    const data = await safeFetch(`${BASE}?limit=24`);
    return data.products ?? [];
  }
  const data = await safeFetch(`${BASE}/search?q=${encodeURIComponent(query)}&limit=24`);
  return data.products ?? [];
}

export async function getById(id) {
  return safeFetch(`${BASE}/${id}`);
}
