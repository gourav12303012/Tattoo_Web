import React from "react";
import { motion } from "framer-motion";
import { FaPenNib, FaComments, FaPaintBrush, FaHeart } from "react-icons/fa";
import Navigation from "./Navigation";
import Footer from "./Footer"; // Add if you use it on the homepage

const works = [
  {
    id: 1,
    title: "Custom Design",
    icon: <FaPenNib className="text-4xl text-indigo-400 mb-4" />,
    description:
      "Every tattoo starts with a personal consultation to create a custom design tailored to your story, style, and skin.",
  },
  {
    id: 2,
    title: "1-on-1 Consultation",
    icon: <FaComments className="text-4xl text-indigo-400 mb-4" />,
    description:
      "Jenny offers dedicated time to understand your idea, recommend placements, and prepare you for the session.",
  },
  {
    id: 3,
    title: "Tattooing Process",
    icon: <FaPaintBrush className="text-4xl text-indigo-400 mb-4" />,
    description:
      "Jenny uses premium inks and precision tools in a safe, sterile environment to bring your design to life.",
  },
  {
    id: 4,
    title: "Aftercare & Support",
    icon: <FaHeart className="text-4xl text-indigo-400 mb-4" />,
    description:
      "Proper aftercare guidance ensures your tattoo heals beautifully. Jenny is available for any post-session support.",
  },
];

const Work = () => {
  return (
    <>
      <Navigation />

      <motion.section
        className="bg-black text-white pt-[72px] pb-24 px-6 sm:px-12 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide mb-12"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            How Jenny Works
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                className="bg-black/30 border border-white/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex flex-col items-center text-center">
                  {work.icon}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 mt-1">
                    {work.title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-white/70 text-base sm:text-lg mb-4">
              Ready to get your next piece of art?
            </p>
            <a
              href="/booking"
              className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-xl tracking-wide shadow-md transition duration-300"
            >
              Book a Session
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default Work;
