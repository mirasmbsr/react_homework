import { Routes, Route, Navigate } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";

function App() {
  return (
<div className="app-container">
  <Navbar />
  <Routes>
    {/* redirect to items */}
    <Route path="/" element={<Navigate to="/items" />} />

    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile" element={<ProfilePage />} />

    <Route path="/items" element={<ItemsPage />} />
    <Route path="/items/:id" element={<ItemDetailsPage />} />

    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
</div>

  );
}

export default App;
