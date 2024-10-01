import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 py-8 border solid">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">SayGon Consultancy Group</h2>
            <p className="mt-2">
              Your trusted partner for educational guidance and consultancy.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <NavLink to="/about" className="hover:text-gray-400 mx-2">
              About Us
            </NavLink>
            <NavLink to="/services" className="hover:text-gray-400 mx-2">
              Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-400 mx-2">
              Contact Us
            </NavLink>
            <NavLink to="/faq" className="hover:text-gray-400 mx-2">
              FAQ
            </NavLink>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} SayGon Consultancy Group. All
            rights reserved.
          </p>
          <p className="text-center text-sm">
            Designed by <strong>SayGon</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
