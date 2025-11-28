import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((s) => s.auth);

  return (
    <div>
      <h1>Profile</h1>
      {user ? <h3>Logged in as: {user.email}</h3> : <p>Not logged in</p>}
    </div>
  );
};

export default ProfilePage;
