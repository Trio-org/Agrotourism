import express from 'express'
import {verifytoken} from '../utils/verifytoken.js'
import { getallproducts } from '../controllers/product.control.js'
const router=express.Router()
router.get('/getallproducts',getallproducts)
export default router