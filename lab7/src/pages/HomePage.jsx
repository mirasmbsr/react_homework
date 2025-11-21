export default function Home() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20 }}>
      <div>
        <h1>Welcome to Products Hub</h1>
        <p>
          This app demonstrates clean module refactor + client-side routing. Browse items,
          search with query params, and open full details. Auth coming next week.
        </p>
        <ul>
          <li>SPA navigation across 5 routes</li>
          <li>Search bound to <code>?q=</code></li>
          <li>Details via <code>/items/:id</code></li>
        </ul>
      </div>
      <img
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
        alt="React app illustration"
        style={{ width: "100%", borderRadius: 12, border: "1px solid #eee" }}
      />
    </section>
  );
}
