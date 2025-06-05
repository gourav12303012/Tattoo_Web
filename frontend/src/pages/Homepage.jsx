import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // <-- Added import
import Footer from "./Footer";
import Navigation from "./Navigation";
import AppointmentForm from "./AppointmentForm";

const Homepage = () => {
  const sections = useMemo(
    () => [
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
    ],
    []
  );

  const tattooGallery = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="w-full text-white">
      <Helmet>
        <title>Ink By Jenny | Unique Tattoo Studio</title>
        <meta
          name="description"
          content="Express your story with unique tattoos by Jenny. Visit our studio for safe and creative tattoo experiences."
        />

        {/* Open Graph tags for social media */}
        <meta
          property="og:title"
          content="Ink By Jenny | Unique Tattoo Studio"
        />
        <meta
          property="og:description"
          content="Express your story with unique tattoos by Jenny. Visit our studio for safe and creative tattoo experiences."
        />
        <meta property="og:image" content="https://yourdomain.com/about.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ink By Jenny | Unique Tattoo Studio"
        />
        <meta
          name="twitter:description"
          content="Express your story with unique tattoos by Jenny. Visit our studio for safe and creative tattoo experiences."
        />
        <meta name="twitter:image" content="https://yourdomain.com/about.jpg" />
      </Helmet>

      {/* Navigation Bar */}
      <Navigation />
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-screen px-6 sm:px-12 pt-[72px]"
        style={{
          backgroundImage: `url(${sections[0].bg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 max-w-7xl w-full text-white grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight uppercase mb-6">
              {sections[0].title}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl text-white/90 leading-relaxed">
              {sections[0].subtitle}
            </p>
          </div>
          {/* Enlarged Appointment Form */}

          <AppointmentForm />
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy" // <-- added lazy loading attribute
        >
          <source src="/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-3xl text-center px-4">
          <h2 className="text-5xl font-extrabold tracking-tight uppercase mb-4">
            Experience the Art in Motion
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            Take a behind-the-scenes look into Jenny’s world — where precision
            meets passion and every tattoo becomes a story.
          </p>
        </div>
      </section>

      {/* Studio Section */}
      <section className="w-full flex flex-col md:flex-row h-screen">
        {/* Left Side: Background Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center text-center relative">
          {/* Fixed Background for Desktop */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: `url(${sections[1].bg})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "left",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/50" />
          </div>

          {/* Mobile Background */}
          <div
            className="absolute inset-0 block md:hidden"
            style={{
              backgroundImage: `url(${sections[1].bg})`,
              backgroundAttachment: "scroll",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/50" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-2xl text-white px-6 sm:px-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight uppercase mb-6">
              {sections[1].title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              {sections[1].subtitle}
            </p>
          </div>
        </div>

        {/* Right Side: Video Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-black">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            loading="lazy" // <-- added lazy loading attribute
          >
            <source src="/v2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
                  loading="lazy" // <-- lazy load images
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
      <Footer />
    </div>
  );
};

export default Homepage;
