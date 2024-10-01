import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/hooks";

const Navbar = () => {
  const { isAuthenticated, logout, isWithGoogleSignIn, signOutWithGoogle } =
    useAuth(); // Use the Auth context
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (isWithGoogleSignIn) {
      await signOutWithGoogle();
    } else {
      await logout(); // Trigger logout
    }
  };

  // Handle redirection after logout
  useEffect(() => {
    if (
      !isAuthenticated &&
      !isWithGoogleSignIn &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup"
    ) {
      // Redirect the user to the login page or home after logout
      navigate("/");
    }
  }, [isAuthenticated, isWithGoogleSignIn, navigate]);

  return (
    <nav className="bg-white p-4 sticky top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-slate-500 text-2xl font-bold">
          <NavLink to="/" className="">
            <img
              className="h-14 w-14 rounded-full"
              src={`${process.env.PUBLIC_URL}/SayGon consultancy group.jpg`}
              alt="logo"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        {isAuthenticated ? (
          <div className="relative inline-block group float-right">
            <img
              className=" w-10 h-10 rounded-full"
              src={`${process.env.PUBLIC_URL}/user.jpg`}
              alt="user"
            />
            <div className="absolute rounded-sm p-4 bg-white cursor-pointer left-0 mt-0 hidden group-hover:flex flex-col space-y-2">
              <NavLink className="px-4 hover:text-slate-500" to="/setting">
                Settings
              </NavLink>
              <button
                onClick={() => handleLogout()}
                className=" px-4 hover:text-slate-500"
              >
                Logout
              </button>
            </div>
          </div>
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
