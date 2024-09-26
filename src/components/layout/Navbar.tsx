import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 p-4 sticky top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-slate-500 text-2xl font-bold">Dream dMs</div>

        {/* Navigation Links */}
        <NavLink
          to="/login"
          className=" w-auto p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 hover:bg-orange-600 hover:text-white"
        >
          SignIn
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
