import { Tattoo } from "../model/tattoAppointment.model.js";

export const appointment = async (req, res) => {
  try {
    const { clientName, tattooType, password, phone, description ,email,date} = req.body;

    if (!clientName  ||!email || !phone || !description ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const book = await Tattoo.create({
      clientName,
     date,
      email,
      tattooType,
      password,
      phone,
      description,
    });

    return res.status(201).json({
      message: "Appointment booked successfully",
      data: book,
    });

  } catch (error) {
    console.error("Appointment Error:", error);
    return res.status(500).json({
      message: "Server error while booking appointment",
      error: error.message,
    });
  }
};


export const fetchAllData = async(req,res)=>{

    try {
         const {phone,password} = req.body
         if(!phone||!password) {
            return res.status(404).json({
                message:"required fields is missing"
                ,success : false
            })
         }

         const existingUser = await Tattoo.findOne({phone})

         if(!existingUser){
              return res.status(404).json({
                message:"user not found"
                ,success : false
            })
         }


        const allData = await Tattoo.find({})
        return res.status(200).json({
            message:"successfully data fetch"
            ,success: true,
            allUser : allData
        })

    } catch (error) {
        console.log(error)
    }
}