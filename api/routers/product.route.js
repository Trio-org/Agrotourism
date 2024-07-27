import express from 'express'
import {verifytoken} from '../utils/verifytoken.js'
import { productcreation } from '../controllers/product.control.js'
const router=express.Router()
router.post('/createproduct',verifytoken,productcreation)

export default router