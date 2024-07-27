import express from 'express'
import { farmcreation } from '../controllers/farm.control.js'
import {verifytoken} from '../utils/verifytoken.js'
const router=express.Router()
router.post('/createfarm',verifytoken,farmcreation)

export default router