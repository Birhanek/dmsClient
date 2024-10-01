import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/hooks";

const Navbar = () => {
  const { isAuthenticated, logout, isWithGoogleSignIn, signOutWithGoogle } =
    useAuth(); // Use the Auth context
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="bg-white p-4 sticky top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation Links in the same flex container */}
        <div className="flex items-center justify-between gap-7 space-x-4">
          {/* Hamburger Icon (visible on mobile only) */}
          <div className="md:hidden xl:hidden lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

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
          <div className="hidden md:flex lg:flex xl:flex space-x-4">
            <NavLink to="/about" className="hover:text-gray-400">
              About Us
            </NavLink>
            <NavLink to="/services" className="hover:text-gray-400">
              Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact Us
            </NavLink>
            <NavLink to="/faq" className="hover:text-gray-400">
              FAQ
            </NavLink>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-20 left-0 w-1/2 bg-purple-700 rounded shadow-lg z-10">
              <div className="flex flex-col items-baseline p-4 text-white space-y-2">
                <NavLink to="/about" className="hover:text-orange-700">
                  About Us
                </NavLink>
                <NavLink to="/services" className="hover:text-orange-700">
                  Services
                </NavLink>
                <NavLink to="/contact" className="hover:text-orange-700">
                  Contact Us
                </NavLink>
                <NavLink to="/faq" className="hover:text-orange-700">
                  FAQ
                </NavLink>
              </div>
            </div>
          )}
        </div>

        {/* Authentication Links or User Menu */}
        {isAuthenticated ? (
          <div className="relative inline-block group">
            <img
              className="w-10 h-10 rounded-full"
              src={`${process.env.PUBLIC_URL}/user.jpg`}
              alt="user"
            />
            <div className="absolute rounded-sm p-4 bg-white cursor-pointer left-0 mt-0 hidden group-hover:flex flex-col space-y-2">
              <NavLink className="px-4 hover:text-slate-500" to="/setting">
                Settings
              </NavLink>
              <button
                onClick={() => handleLogout()}
                className="px-4 hover:text-slate-500"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="w-auto p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 hover:bg-orange-600 hover:text-white"
          >
            SignIn
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
