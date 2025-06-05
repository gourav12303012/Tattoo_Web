import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navigation from "./Navigation";

const About = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen overflow-hidden text-white bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <img
        src="/Studio.png" // Ensure this image exists in your public/ folder
        alt="About Jenny"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 p-1150px"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Back to Home */}
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
      <div className="relative z-20 flex flex-col justify-center items-start min-h-screen px-6 sm:px-12 max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold uppercase mb-6 leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          About Jenny
        </motion.h1>

        <motion.p
          className="text-white/80 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Jenny is a passionate tattoo artist with a unique blend of precision and creativity.
          With years of experience in blackwork, realism, and illustrative tattoos, she has
          transformed countless ideas into timeless skin art. Jenny believes tattoos are not just
          ink — they are personal stories etched forever. Her studio stands for safety, expression,
          and excellence. Come meet the artist, get inspired, and create a masterpiece.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
