import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDb from './utils/connectDb.js'
import tattooRoute from "./router/tatto.route.js"
const app = express()

dotenv.config()
app.use(express.json())
const corsOption = {
    origin:[process.env.frontend_Url]
    ,credentials : true
}

app.get("/",(req,res)=>{
    res.send({name:"amit"})
})
app.use(cors(corsOption))
app.use("/tattoo",tattooRoute)

app.listen(5000,()=>{
    connectDb()
    console.log("server is listen is port number 5000")
})