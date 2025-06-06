import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="w-full text-white">
      <Helmet>
        <title>Contact | Ink By Jenny</title>
        <meta name="description" content="Get in touch with Jenny for bookings, queries or consultations at her tattoo studio." />

        <meta property="og:title" content="Contact | Ink By Jenny" />
        <meta property="og:description" content="Get in touch with Jenny for bookings, queries or consultations at her tattoo studio." />
        <meta property="og:image" content="https://yourdomain.com/about.jpg" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Ink By Jenny" />
        <meta name="twitter:description" content="Get in touch with Jenny for bookings, queries or consultations at her tattoo studio." />
        <meta name="twitter:image" content="https://yourdomain.com/about.jpg" />
      </Helmet>

      <Navigation />

      <section
        className="relative flex items-center justify-center text-center min-h-screen px-6 sm:px-12 pt-[72px]"
        style={{
          backgroundImage: `url(/about.jpg)`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-4xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight uppercase mb-6"
          >
            Get In Touch
          </motion.h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you have a vision or need guidance, we’d love to hear from you. Book your next masterpiece today.
          </p>

          <form className="bg-black/70 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Input type="text" placeholder="Your Name" className="text-white" required />
            <Input type="email" placeholder="Email Address" className="text-white" required />
            <Input type="tel" placeholder="Phone Number" className="text-white" />
            <Textarea
              placeholder="Your Message / Tattoo Idea"
              className="md:col-span-2 text-white h-32"
              required
            />
            <Button className="w-full md:col-span-2 bg-purple-600 hover:bg-purple-700 transition">
              Send Message
            </Button>
          </form>

          <div className="mt-12 text-center text-sm text-white/70 space-y-2">
            <p>Email: <a href="mailto:inkbyjenny@gmail.com" className="underline">inkbyjenny@gmail.com</a></p>
            <p>Phone: <a href="tel:+919876543210" className="underline">+91 98765 43210</a></p>
            <p>Studio Address: 45/3 Art Street, Delhi, India</p>
            <p>Hours: Mon–Sat: 10AM – 7PM</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
