import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", gap: 12 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/login" style={{ marginLeft: "auto" }}>Login</NavLink>
      </nav>
      <main style={{ maxWidth: 1080, margin: "0 auto", padding: 16 }}>
        <Outlet />
      </main>
    </>
  );
}

