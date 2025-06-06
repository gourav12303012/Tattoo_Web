import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Navigation from "./Navigation";

const Studio = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen overflow-hidden text-white bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <img
        src="/Studio.png"
        alt="Studio Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Navigation Back Button */}
      {/* <div className="absolute top-6 left-6 z-30">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-indigo-400 transition border border-indigo-500 px-4 py-2 rounded-md"
        >
          <FaArrowLeft /> <span>Back to Home</span>
        </Link>
      </div> */}
      <Navigation/>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 sm:px-12 max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-6xl font-extrabold uppercase mb-6 leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Welcome to <br /> Jenny's Studio
        </motion.h2>

        <motion.p
          className="text-white/80 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Jenny is a passionate tattoo artist with a unique blend of precision and creativity.
          Specializing in blackwork and realism, she brings each client’s story to life through art.
          Whether it’s your first tattoo or your next masterpiece, Jenny’s studio ensures a safe,
          expressive, and deeply personal experience.
        </motion.p>

        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-md font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         <Link to="/"> Book Your Appointment</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Studio;
