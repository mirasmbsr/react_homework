import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar" style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* тут добавь другие ссылки из прошлого ДЗ */}

      <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
