import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardPage from "./DashboardPage";


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("Admin"); // 'client' or 'admin'
  const [allUserData,setAllUserData] = useState([])
  const navigation = useNavigate()

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  const onSubmit =async(data)=>{
    console.log(data)
    try {
      const res  = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/allData`,data,{
        headers:{
          "Content-Type":"application/json"
        }
      })

      setAllUserData(res.data.allUser)
    
     navigation("/DashboardPage", { state: { allUser: res.data.allUser } });
      
    } catch (error) {
      console.log("server is not responding")
    }
  }

  const {register,handleSubmit,formState:{errors}}
  =useForm()

  return (
    <>
      <Helmet>
        <title>{isLogin ? "Login" : "Sign Up"} - InkByJenny</title>
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 shadow-2xl rounded-2xl p-8 sm:p-12 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
            {isLogin ? "Login" : "Sign Up"} as {userType === "client" ? "Client" : "Admin"}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm mb-1 text-white/80">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-zinc-800 rounded-xl px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Jenny Doe"
                  {...register("clientName",{required:"name is required"})}
                />
                {errors.clientName &&<p>{errors.clientName.message}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm mb-1 text-white/80">Phone</label>
              <input
                type="number"
                className="w-full bg-zinc-800 rounded-xl px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="enter your number"
                {...register("phone",{required:"phone number is required"})}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div className="relative">
              <label className="block text-sm mb-1 text-white/80">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-zinc-800 rounded-xl px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
                {...register("password",{required:"password is required"})}
              />
              {errors.password && <p>{errors.password.message}</p>}
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-9 text-white/60 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm mb-1 text-white/80">Confirm Password</label>
                <input
                  type="password"
                  className="w-full bg-zinc-800 rounded-xl px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                />
              </div>
            )}

            {/* Radio buttons just above the submit button */}
           

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-xl py-2 font-semibold"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/70">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={toggleForm} className="text-indigo-400 hover:underline">
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default AuthForm;
