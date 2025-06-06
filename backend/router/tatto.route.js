import express from 'express'
import { appointment, fetchAllData } from '../controller/tattoo.controller.js'


const router = express.Router()



router.route("/addAppt").post(appointment)
router.route("/allData")
.post(fetchAllData)

export default router