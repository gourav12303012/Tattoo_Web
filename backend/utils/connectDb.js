import mongoose from "mongoose";

const connectDb =()=>{
    mongoose.connect(process.env.mongo_Url).then(()=>console.log("Db is connected"))
    .catch((err)=>{
        console.log(err)
    })
}

export default connectDb