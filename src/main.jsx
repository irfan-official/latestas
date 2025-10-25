import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import DataContext from "./context/DataContext.jsx";
import { RouterProvider } from "react-router/dom";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <DataContext>
        {/* The RouterProvider handles all routes */}
        <RouterProvider router={router} />
      </DataContext>
    </AuthContext>
  </StrictMode>
);
