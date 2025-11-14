import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import ItemDetails from "./pages/ItemDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "items", element: <Items /> },
      { path: "items/:id", element: <ItemDetails /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default router;
