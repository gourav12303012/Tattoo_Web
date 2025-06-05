import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md px-6 py-2 flex items-center justify-between">

      {/* Hamburger on far left (mobile only) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer select-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ marginRight: "0.75rem" }} // to add a bit space from logo
      >
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transform transition duration-300 ease-in-out origin-left ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm my-1 transition-opacity duration-300 ease-in-out ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transform transition duration-300 ease-in-out origin-left ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Logo */}
      <div className="text-white font-extrabold text-2xl tracking-widest cursor-pointer select-none">
        InkbyJenny
      </div>

      {/* Desktop nav + login on right */}
      <div className="hidden md:flex items-center space-x-6">
        <nav className="flex space-x-8 text-sm uppercase tracking-wider font-semibold text-white/90">
          <Link to="/Studio" className="relative group px-2 py-1 hover:text-white transition">
            Studio
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
          <Link to="/" className="relative group px-2 py-1 hover:text-white transition">
            Home
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
          <Link to="/Work" className="relative group px-2 py-1 hover:text-white transition">
            Work
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
          <Link to="/TattooCategory" className="relative group px-2 py-1 hover:text-white transition">
            Tattoo Category
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
          <Link to="/About" className="relative group px-2 py-1 hover:text-white transition">
            About
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
          <Link to="/Contact" className="relative group px-2 py-1 hover:text-white transition">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
          <Link to="/Testimonial" className="relative group px-2 py-1 hover:text-white transition">
            Testimonial
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
        </nav>

        <Link
          to="/Login"
          className="text-sm text-white/90 cursor-pointer hover:text-white transition font-semibold px-3 py-1 rounded-md border border-transparent hover:border-indigo-500 select-none"
        >
          Login
        </Link>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md flex flex-col space-y-4 py-4 px-6 md:hidden z-40">
          <nav className="flex flex-col space-y-3 text-sm uppercase tracking-wider font-semibold text-white/90">
            <Link
              to="/Studio"
              onClick={() => setMenuOpen(false)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              Studio
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
            </Link>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
            </Link>
            <Link
              to="/Work"
              onClick={() => setMenuOpen(false)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              Work
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
            </Link>
            <Link
              to="/TattooCategory"
              onClick={() => setMenuOpen(false)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              Tattoo Category
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
            </Link>
            <Link
              to="/About"
              onClick={() => setMenuOpen(false)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
            </Link>
            <Link
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
            </Link>
            <Link
              to="/Testimonial"
              onClick={() => setMenuOpen(false)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              Testimonial
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
            </Link>
            <Link
              to="/Login"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/90 cursor-pointer hover:text-white transition font-semibold px-3 py-1 rounded-md border border-transparent hover:border-indigo-500 select-none"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navigation;
