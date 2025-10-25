import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import page404 from "../pages/page404.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Services from "../pages/Services.jsx";
import ServicesDetails from "../pages/ServicesDetails.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import MyProfile from "../pages/MyProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <MyProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/services",
    Component: Services,
    children: [
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <ServicesDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/*",
    Component: page404,
  },
]);

export default router;
