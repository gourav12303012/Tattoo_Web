import express from 'express'
import cors from 'cors'

import connectDb from './utils/connectDb.js'
import tattooRoute from "./router/tatto.route.js"
const app = express()

app.use(express.json())
const corsOption = {
    origin:["http://localhost:5173"]
    ,credentials : true
}

app.use(cors(corsOption))
app.use("/tattoo",tattooRoute)

app.listen(5000,()=>{
    connectDb()
    console.log("server is listen is port number 5000")
})