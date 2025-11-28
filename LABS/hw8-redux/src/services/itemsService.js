const items = [
  { id: "1", title: "iPhone 16 Pro", price: 1499, img: "https://via.placeholder.com/200" },
  { id: "2", title: "PS5 Pro", price: 799, img: "https://via.placeholder.com/200" },
  { id: "3", title: "MacBook Air M3", price: 1599, img: "https://via.placeholder.com/200" },
  { id: "4", title: "AirPods Max 2", price: 599, img: "https://via.placeholder.com/200" },
  { id: "5", title: "Samsung S25 Ultra", price: 1399, img: "https://via.placeholder.com/200" },
  { id: "6", title: "iPad Pro OLED", price: 1299, img: "https://via.placeholder.com/200" },
  { id: "7", title: "Apple Watch X", price: 499, img: "https://via.placeholder.com/200" },
  { id: "8", title: "Dell XPS 17", price: 2599, img: "https://via.placeholder.com/200" },
];

export async function getAll(query = "") {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) return resolve(items);
      resolve(items.filter((i) =>
        i.title.toLowerCase().includes(query.toLowerCase())
      ));
    }, 300);
  });
}

export async function getById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = items.find((i) => i.id === id);
      if (!item) reject("Item not found");
      resolve(item);
    }, 300);
  });
}
