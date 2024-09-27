import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/hooks";
import Logout from "../../pages/Logout";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Use the Auth context
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); // Trigger logout
  };

  // Handle redirection after logout
  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect the user to the login page or home after logout
      console.log(isAuthenticated);
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <nav className="bg-slate-100 p-4 sticky top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-slate-500 text-2xl font-bold">Dream dMs</div>

        {/* Navigation Links */}
        {isAuthenticated ? (
          <button
            onClick={() => handleLogout()}
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-500 hover:bg-orange-600 hover:text-white"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className=" w-auto p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 hover:bg-orange-600 hover:text-white"
          >
            SignIn
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
