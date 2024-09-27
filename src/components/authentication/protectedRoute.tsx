import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/hooks";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated && !user) {
    // If the user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components (protected content)
  return children;
};

export default ProtectedRoute;
