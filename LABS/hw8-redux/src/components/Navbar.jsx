import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/items">Items</Link>
      </div>

      <div className="nav-right">
        {user ? (
          <>
            <Link to="/profile">{user.email}</Link>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
