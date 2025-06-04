import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const sections = [
  {
    id: 1,
    title: "Ink By Jenny",
    subtitle:
      "Express Your Story in Ink. Whether you're looking for bold and edgy designs or intricate and meaningful ink, we've got you covered.",
    bg: "/about.jpg",
  },
  {
    id: 2,
    title: "Our Studio",
    subtitle: "A Safe & Creative Space",
    bg: "/Studio.png",
  },
  {
    id: 4,
    title: "About Jenny",
    subtitle: "Passion Meets Precision",
    bg: "/about.jpg",
  },
];

const tattooGallery = [
  {
    id: 1,
    title: "Blackwork Skull",
    description: "A detailed blackwork tattoo symbolizing strength.",
    image: "/t1.jpg",
  },
  {
    id: 2,
    title: "Realism Portrait",
    description: "Hyper-realistic portrait capturing emotions vividly.",
    image: "/t2.jpg",
  },
  {
    id: 3,
    title: "Floral Sleeve",
    description: "Elegant floral patterns wrapping the arm.",
    image: "/t3.jpg",
  },
  {
    id: 4,
    title: "Geometric Mandala",
    description: "Intricate mandala designs in geometric shapes.",
    image: "/t4.jpg",
  },
  {
    id: 5,
    title: "Geometric Mandala",
    description: "Intricate mandala designs in geometric shapes.",
    image: "/t7.jpg",
  },
  {
    id: 6,
    title: "Geometric Mandala",
    description: "Intricate mandala designs in geometric shapes.",
    image: "/t5.jpg",
  },
];

const Homepage = () => {
  return (
    <div className="w-full text-white">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md px-6 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-extrabold text-2xl tracking-widest mb-3 md:mb-0 cursor-pointer select-none">
          InkbyJenny
        </div>
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
          <Link to="/About" className="relative group px-2 py-1 hover:text-white transition">
            About
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-indigo-500 transition-all"></span>
          </Link>
        </nav>
        <div className="text-sm text-white/90 cursor-pointer hover:text-white transition font-semibold mt-3 md:mt-0 px-3 py-1 rounded-md border border-transparent hover:border-indigo-500 select-none">
          Contact
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-screen px-6 sm:px-12"
        style={{
          backgroundImage: `url(${sections[0].bg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight uppercase mb-6">
            {sections[0].title}
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed animate-fade-in-up">
            {sections[0].subtitle}
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-3xl text-center px-4">
          <h2 className="text-5xl font-extrabold tracking-tight uppercase mb-4">
            Experience the Art in Motion
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            Take a behind-the-scenes look into Jenny’s world — where precision meets passion and every tattoo becomes a story.
          </p>
        </div>
      </section>

      {/* Studio Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-screen px-6 sm:px-12"
        style={{
          backgroundImage: `url(${sections[1].bg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight uppercase mb-6">
            {sections[1].title}
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto text-white/90">
            {sections[1].subtitle}
          </p>
        </div>
      </section>

      {/* Tattoo Gallery Section */}
      <section
  className="relative min-h-screen px-6 sm:px-12 py-16 bg-fixed bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: "url(/OIP.jpeg)" }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />

  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className="text-5xl font-extrabold uppercase text-center mb-12">
      Tattoo Gallery
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {tattooGallery.map(({ id, title, description, image }) => (
        <div
          key={id}
          className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 py-4 text-white">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-white/80">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-screen px-6 sm:px-12"
        style={{
          backgroundImage: `url(${sections[2].bg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight uppercase mb-6">
            {sections[2].title}
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto text-white/90">
            {sections[2].subtitle}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
