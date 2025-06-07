import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <div className="w-full text-white">
      <Helmet>
        <title>Contact | Ink By Jenny</title>
        {/* ... meta tags ... */}
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
          <motion.h2 className="text-5xl font-extrabold tracking-tight uppercase mb-6">
            Get In Touch
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="bg-black/70 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="text-white"
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="text-white"
              required
            />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="text-white"
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Tattoo Idea"
              className="md:col-span-2 text-white h-32"
              required
            />
            <Button type="submit" className="w-full md:col-span-2 bg-purple-600 hover:bg-purple-700 transition">
              Send Message
            </Button>
          </form>

          <p className="mt-4 text-sm text-green-400">{status}</p>

          <div className="mt-12 text-center text-sm text-white/70 space-y-2">
            {/* ...contact info... */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
