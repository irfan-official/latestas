import React, { useContext } from "react";
import { Navigate } from "react-router";
import { Auth_Context } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(Auth_Context);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-600">Loading...</h1>
      </div>
    );
  }

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Else show the protected page
  return children;
}

export default ProtectedRoute;
