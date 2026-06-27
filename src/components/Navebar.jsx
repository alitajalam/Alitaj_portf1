import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/90 backdrop-blur-sm py-4 px-6 md:px-8 shadow-lg">
      
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          Alitaj
          <span className="text-purple">_00</span>

          <span className="w-3 h-3 bg-purple rounded-full inline-block ml-2"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center text-sm">

          <a
            href="/#home"
            className="relative inline-block text-white/80 hover:text-purple transition duration-300 group"
          >
            Home

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/#about"
            className="relative inline-block text-white/80 hover:text-purple transition duration-300 group"
          >
            About

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/#skills"
            className="relative inline-block text-white/80 hover:text-purple transition duration-300 group"
          >
            Skills

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/#projects"
            className="relative inline-block text-white/80 hover:text-purple transition duration-300 group"
          >
            Projects

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/#experience"
            className="relative inline-block text-white/80 hover:text-purple transition duration-300 group"
          >
            Experience

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/#contact"
            className="relative inline-block text-white/80 hover:text-purple transition duration-300 group"
          >
            Contact

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Admin Button */}
          <Link
            to="/admin"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-300 text-sm"
          >
            Admin
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl text-white cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl text-white cursor-pointer"
            />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden mt-4 bg-[#1f1f1f] rounded-lg p-6 flex flex-col space-y-6 text-center justify-center items-center">

          <a
            onClick={() => setShowMenu(false)}
            href="/#home"
            className="text-white/80 hover:text-purple transition duration-300"
          >
            Home
          </a>

          <a
            onClick={() => setShowMenu(false)}
            href="/#about"
            className="text-white/80 hover:text-purple transition duration-300"
          >
            About
          </a>

          <a
            onClick={() => setShowMenu(false)}
            href="/#skills"
            className="text-white/80 hover:text-purple transition duration-300"
          >
            Skills
          </a>

          <a
            onClick={() => setShowMenu(false)}
            href="/#projects"
            className="text-white/80 hover:text-purple transition duration-300"
          >
            Projects
          </a>

          <a
            onClick={() => setShowMenu(false)}
            href="/#experience"
            className="text-white/80 hover:text-purple transition duration-300"
          >
            Experience
          </a>

          <a
            onClick={() => setShowMenu(false)}
            href="/#contact"
            className="text-white/80 hover:text-purple transition duration-300"
          >
            Contact
          </a>

          {/* Mobile Admin Button */}
          <Link
            to="/admin"
            onClick={() => setShowMenu(false)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            Admin
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;