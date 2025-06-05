import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo / Name */}
        <div className="font-bold text-lg tracking-wide">InkbyJenny</div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/Studio" className="hover:text-indigo-400 transition">Studio</Link>
          <Link to="/Work" className="hover:text-indigo-400 transition">Work</Link>
          <Link to="/About" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/Login" className="hover:text-indigo-400 transition">Login</Link>
          <Link to="/terms" className="hover:text-indigo-400 transition">Terms & Conditions</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white/70 hover:text-white"><FaInstagram size={18} /></a>
          <a href="#" className="text-white/70 hover:text-white"><FaFacebookF size={18} /></a>
          <a href="#" className="text-white/70 hover:text-white"><FaTwitter size={18} /></a>
          <a href="#" className="text-white/70 hover:text-white"><FaYoutube size={18} /></a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-white/50 mt-6">
        © {new Date().getFullYear()} InkbyJenny. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
