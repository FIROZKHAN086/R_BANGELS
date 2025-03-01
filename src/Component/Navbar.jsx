import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Close Icon
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex sticky w-full z-[100] rounded-lg top-0 bg-gradient-to-r from-blue-600/25 to-pink-400/60 text-black font-semibold backdrop-blur-lg shadow-md items-center justify-between px-4 sm:px-6 py-3 sm:py-4"
    >
      {/* Logo */}
      <div className="text-xl sm:text-2xl hover:scale-110 cursor-default font-bold">
        <Link to="/">RB-BANGELS</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6 text-lg">
        <Link to="/" className="hover:text-white transition   after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full ">
          Home
        </Link>
        <Link to="/tranders" className="hover:text-white transition   after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
          Tranders
        </Link>
        <Link to="/spacel" className="hover:text-white transition   after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
          Spacel
        </Link>
      </div>

      {/* Right Side (Cart & Login) */}
      <div className="flex items-center gap-4">
        <Link to="/checkout">
          <button>
            <FaCartPlus size={22} />
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-blue-500/60 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
            Login
          </button>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
          <FiMenu className="w-7 h-7 text-black" />
        </button>
      </div>

      {/* Mobile Menu with improved styling */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed inset-y-0 right-0 z-50 w-[80%] sm:w-64 bg-slate-900/90 backdrop-blur-lg shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white"
            >
              <FiX className="w-7 h-7" />
            </button>

            <div className="text-white">
            <svg
  width="100"
  height="100"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <text
    x="5"
    y="20"
    fontSize="16"
    fontWeight="bold"
    fill="white"
    
  >
    RB
    <animate
      attributeName="opacity"
      values="0;2;0"
      dur="1.5s"
      repeatCount="indefinite"
       
    />
  </text>

  <g transform="translate(6, 2)">
    <path
      // d="M6 11L7 2M10 12L12 3M14 12V5M18 14V9"
      // stroke="black"
      // strokeWidth="2"
      // strokeLinecap="round"
      // strokeLinejoin="round"
    >
      <animateTransform
        attributeType="XML"
        attributeName="transform"
        type="rotate"
        values="0 12 12; 20 12 12; 0 12 12"
        dur="0.4s"
        repeatCount="indefinite"
         
      />
    </path>
  </g>
</svg>
            </div>

            <Link
              to="/"
              onClick={toggleMenu}
              className="text-2xl backdrop:filter  hover:text-blue-400/30 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/tranders"
              onClick={toggleMenu}
              className="text-2xl backdrop:filter hover:text-blue-400/30 transition duration-300"
            >
              Tranders
            </Link>
            <Link
              to="/spacel"
              onClick={toggleMenu}
              className="text-2xl backdrop:filter  hover:text-blue-400/40 transition duration-300"
            >
              Spacel
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
