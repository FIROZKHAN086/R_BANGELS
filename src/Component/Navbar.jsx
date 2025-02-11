import React, { useState } from "react";
import { FaCarAlt, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {motion} from 'motion/react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
    initial={{
      x:0,
      y:0,
      opacity:0,
    }}
    animate={{
      opacity:1,
      animationDuration:3,
    }}
    className="flex sticky w-screen z-50 top-0 mb-10 bg-white/20 text-black font-semibold backdrop-blur-lg shadow-md items-center justify-between  px-6 py-4 ">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a to={"/"} className="hover:text-blue-400">
          RB-BANGELS
        </a>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 text-black h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden lg:flex space-x-6 text-lg">
        <Link
          to={"/"}
          className="hover:text-blue-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to={"/tranders"}
          className="hover:text-blue-400 transition duration-300"
        >
          Tranders
        </Link>
        <Link
          to={"/spacel"}
          className="hover:text-blue-400 transition duration-300"
        >
          Spacel
        </Link>
      </div>
      <div className='flex items-center justify-center gap-4'>
            <Link to={'/cart'}>
            <button><FaCartPlus/></button>
            </Link>
      {/* Login Button */}
      <Link to="/login">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
          Login
        </button>
      </Link>
      </div>

      {/* Mobile Menu (Hidden on Desktop, Shown on Mobile) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute z-50 flex flex-col justify-center items-center top-16 left-0 w-full bg-gray-800/60  text-white p-4">
          <div className="space-y-4">
            <Link
              to={"/"}
              onClick={toggleMenu}
              className="block text-lg hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to={"/tranders"}
              onClick={toggleMenu}
              className="block text-lg hover:text-blue-400 transition duration-300"
            >
              Tranders
            </Link>
            <Link
              to={"/spacel"}
              onClick={toggleMenu}
              className="block text-lg hover:text-blue-400 transition duration-300"
            >
              Spacel
            </Link>
           
            
          </div>
        </div>
      )}
    </motion.nav>
  );
};
// NavBar Compontant Was Don
export default Navbar;
