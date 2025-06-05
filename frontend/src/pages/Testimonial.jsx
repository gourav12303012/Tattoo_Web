import React from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

const testimonials = [
  {
    name: "Br01_____gaurav______",
    quote:
      "Jenny transformed my idea into an incredible piece of art. The detail and care were beyond expectations!",
    avatar: "/A1.jpg",
  },
  {
    name: "Priya Sharma",
    quote:
      "First tattoo and I was nervous. Jenny made it a memorable and comfortable experience. Totally recommend!",
    avatar: "/t1.jpg",
  },
  {
    name: "Arjun Kumar",
    quote:
      "Professional and talented! The studio was clean, and Jenny’s work speaks for itself.",
    avatar: "/A2.jpg",
  },
];

const Testimonial = () => {
  return (
    <>
    <Navigation/>
    <section
    
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-20 text-white text-center"
      style={{
        backgroundImage: `url('/about.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      id="testimonials"
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold uppercase mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/80 p-6 rounded-2xl border border-white/10 backdrop-blur shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20 mr-4"
                />
                <h4 className="text-lg font-semibold">{t.name}</h4>
              </div>
              <p className="text-white/80 leading-relaxed">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonial;
