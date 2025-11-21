import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h1>404 — Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/" style={{
        display: "inline-block",
        marginTop: 8,
        padding: "8px 10px",
        borderRadius: 8,
        background: "#111",
        color: "white",
        textDecoration: "none"
      }}>Go Home</Link>
    </section>
  );
}
