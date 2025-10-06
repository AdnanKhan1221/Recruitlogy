import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header m-5 w-auto h-24">
      <ul className="flex items-center justify-between flex-wrap px-6">
        
        {/* Logo */}
        <li className="flex-shrink-0">
          <img
            className="max-h-20 rounded cursor-pointer"
            src="/Images/RecruitlogyPandaLogo.png"
            alt="logo"
          />
        </li>

        {/* Navigation Links  */}
        <li className="flex items-center font-bold space-x-10 ml-auto text-lg">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              `transition duration-300 ${isActive ? "text-red-600" : "hover:text-red-600"}`
            }
          >
            Home
          </NavLink>
          <NavLink to="/services" className="hover:text-red-600 transition duration-300">
            Our Services
          </NavLink>
          <NavLink to="/about" className="hover:text-red-600 transition duration-300">
            About Us
          </NavLink>
          <NavLink to="/verticals" className="hover:text-red-600 transition duration-300">
            Verticals
          </NavLink>
          <NavLink to="/support" className="hover:text-red-600 transition duration-300">
            Support
          </NavLink>
        </li>

        {/* Login Button */}
        <li className="flex-shrink-0 ml-6">
          <button className="font-bold bg-red-600 text-white rounded-2xl h-12 px-6 text-lg flex items-center justify-center cursor-pointer hover:bg-rose-800 transition duration-300">
            Login / Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
