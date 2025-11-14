import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "8px 12px",
  borderRadius: 8,
  textDecoration: "none",
  color: isActive ? "#111" : "#333",
  background: isActive ? "#f0f0f0" : "transparent",
});

export default function NavBar() {
  return (
    <header style={{ borderBottom: "1px solid #eee", marginBottom: 16 }}>
      <nav style={{ maxWidth: 1080, margin: "0 auto", padding: "12px 16px", display: "flex", gap: 12 }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/items" style={linkStyle}>Items</NavLink>
        <div style={{ flex: 1 }} />
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
      </nav>
    </header>
  );
}
