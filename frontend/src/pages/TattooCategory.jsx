import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaArrowLeft, FaTags } from "react-icons/fa";
import Navigation from "./Navigation";

const categories = [
  { id: 1, name: "Blackwork", image: "/t1.jpg" },
  { id: 2, name: "Realism", image: "/t2.jpg" },
  { id: 3, name: "Floral", image: "/t3.jpg" },
  { id: 4, name: "Geometric", image: "/t4.jpg" },
  { id: 5, name: "Minimalist", image: "/t5.jpg" },
  { id: 6, name: "Traditional", image: "/t6.jpg" },
];

const TattooCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <motion.div
      className="w-full text-white bg-black min-h-screen px-6 sm:px-12 pt-[72px] pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        {/* <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-indigo-400 hover:text-white transition border border-indigo-500 px-4 py-2 rounded-md"
          >
            <FaArrowLeft /> <span>Back to Home</span>
          </Link>
        </div> */}
        <Navigation/>

        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-extrabold uppercase text-center mb-10 tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <FaTags className="inline-block mr-3 mb-1 text-indigo-500" />
          Tattoo Categories
        </motion.h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-12 relative">
          <FaSearch className="absolute left-3 top-3 text-white/60" />
          <input
            type="text"
            placeholder="Search by category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 pl-10 pr-4 py-3 text-white placeholder-white/60 bg-black/40 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredCategories.length > 0 ? (
            filteredCategories.map(({ id, name, image }, index) => (
              <motion.div
                key={id}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex items-end justify-center">
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    {name}
                  </h3>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-white/70">
              No categories found.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TattooCategory;
