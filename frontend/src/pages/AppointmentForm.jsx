import { motion } from "framer-motion";

const AppointmentForm = ()=>{
    return(
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl w-full max-w-lg h-[550px] mx-auto text-left flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white text-center">Book an Appointment</h2>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  placeholder="Describe your idea..."
                  className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/70 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </form>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition mt-4"
            >
              Submit
            </button>
          </div>
        
    )
}

export default AppointmentForm