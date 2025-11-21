import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) return <div>No user data</div>;

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>UID:</strong> {user.uid}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
