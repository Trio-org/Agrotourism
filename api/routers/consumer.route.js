import express from 'express'
import {verifytoken} from '../utils/verifytoken.js'
import { getallproducts } from '../controllers/product.control.js'
import { getallfarms } from '../controllers/farm.control.js'
const router=express.Router()
router.get('/getallproducts',getallproducts)
router.get('/getallfarms',getallfarms)

export default router