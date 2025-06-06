import React, { memo } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";

const AppointmentForm =() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/addAppt`, data);
console.log(import.meta.env.VITE_BACKEND_URL)
      console.log("Appointment submitted:", res.data);
      alert("Appointment submitted successfully!");
      reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit appointment.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl w-full max-w-lg mx-auto text-left"
    >
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("clientName", { required: "Client name is required" })}
          />
          {errors.clientName && <p className="text-red-400 text-sm">{errors.clientName.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        </div>
         <div>
          <input
            type="datetime-local"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("date", { required: "date is required" })}
          />
          {errors.date && <p className="text-red-400 text-sm">{errors.date.message}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Tattoo Type"
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("tattooType", { required: "Tattoo type is required" })}
          />
          {errors.tattooType && <p className="text-red-400 text-sm">{errors.tattooType.message}</p>}
        </div>

        <div>
          <textarea
            placeholder="Describe your idea..."
            className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}
        </div>

        {/* ✅ Moved button inside the form */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition mt-2"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
}


export default AppointmentForm;
