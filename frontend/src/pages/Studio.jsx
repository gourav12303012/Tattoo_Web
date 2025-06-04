import React from "react";
import { Link } from "react-router-dom";

const Studio = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background Image */}
      <img
        src="/Studio.png" // Put your studio background image in public/
        alt="Studio Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Navigation Link */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          to="/"
          className="text-white font-bold text-lg uppercase tracking-wide hover:text-indigo-400 transition"
        >
          &larr; Home
        </Link>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 sm:px-12 max-w-4xl">
        <h2 className="text-4xl sm:text-6xl font-extrabold uppercase mb-6 leading-tight">
          Welcome to <br /> Jenny's Studio
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
          Jenny is a passionate tattoo artist with a unique blend of precision and creativity.
          Specializing in blackwork and realism, she brings each client’s story to life through art.
          Whether it’s your first tattoo or your next masterpiece, Jenny’s studio ensures a safe,
          expressive, and deeply personal experience.
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-md font-semibold">
          Book Your Appointment
        </button>
      </div>
    </div>
  );
};

export default Studio;
