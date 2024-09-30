import React, { useEffect } from "react";
import { useAuth } from "../components/hooks/hooks";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { isAuthenticated, logout, isWithGoogleSignIn, signOutWithGoogle } =
    useAuth(); // Use the Auth context
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isWithGoogleSignIn) {
      signOutWithGoogle();
    } else {
      logout();
    }
  };

  // Handle redirection after logout
  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect the user to the login page or home after logout
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isWithGoogleSignIn]);

  return (
    <button className="border border-gray-300 rounded focus:outline-none focus:border-blue-500 hover:bg-orange-600 hover:text-white">
      Logout
    </button>
  );
};

export default Logout;
