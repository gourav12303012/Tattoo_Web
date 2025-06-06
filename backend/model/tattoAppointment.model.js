import mongoose from "mongoose";

const tattooSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true, 
      trim: true,
    },
   
    password:{
     type: String,
     
    },
    email:{
      type:String,
      required:true
    },
    date:{
      type:Date
    },
    tattooType: {
      type: String,
    
      trim: true,
    },
    phone: {
      type: String, // Changed to string to accommodate leading 0s and country codes
      required: true,
      match: /^\d{10,15}$/, 
    },
    description: {
      type: String,
      required:true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Export the model
export const Tattoo = mongoose.model("Tattoo", tattooSchema);
