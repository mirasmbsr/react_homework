import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <article style={{
      border: "1px solid #eee",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }}>
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{ width: "100%", height: 160, objectFit: "cover" }}
      />
      <div style={{ padding: 12, display: "grid", gap: 6 }}>
        <h3 style={{ margin: 0 }}>{item.title}</h3>
        <p style={{ margin: 0, color: "#555", lineHeight: 1.35 }}>
          {item.description?.slice(0, 90)}{item.description?.length > 90 ? "…" : ""}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
          <span>${item.price}</span>
          <span>⭐ {item.rating}</span>
        </div>
        <Link to={`/items/${item.id}`} style={{
          marginTop: 6,
          textDecoration: "none",
          background: "#111",
          color: "white",
          padding: "8px 10px",
          borderRadius: 8,
          textAlign: "center"
        }}>
          View details
        </Link>
      </div>
    </article>
  );
}
