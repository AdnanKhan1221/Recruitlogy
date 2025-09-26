import React from 'react';

const Navbar = () => {
  return (
    <div className="header top-0 m-5 w-auto h-24">
      <ul className="flex items-center justify-between gap-6">
     
        {/* Logo */}
        <li className="m-1 ml-2">
          <img
            className="max-h-20 rounded cursor-pointer"
            src="/Images/RcruitologyPandaLogo.png"
            alt="logo"
          />
        </li>

        {/* Navigation Links */}
        <li className="flex items-center font-bold gap-12 mr-4 mx-120 text-lg">
          <span className="cursor-pointer hover:text-red-600 transition duration-300">Home</span>
          <span className="cursor-pointer hover:text-red-600 transition duration-300">Our Services</span>
          <span className="cursor-pointer hover:text-red-600 transition duration-300">About Us</span>
          <span className="cursor-pointer hover:text-red-600 transition duration-300">Verticals</span>
          <span className="cursor-pointer hover:text-red-600 transition duration-300">Support</span>
        </li>

        {/* Login Button */}
        <li className="mr-20 -mt-1">
          <div className="loginContainer font-bold bg-red-600 text-white rounded-2xl h-12 px-8 text-lg flex items-center justify-center cursor-pointer hover:bg-rose-800 transition duration-300">
            Login / Sign Up
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
