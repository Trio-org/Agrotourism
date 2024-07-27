import express from 'express'
import {verifytoken} from '../utils/verifytoken.js'
import { productcreation, updateproduct } from '../controllers/product.control.js'
const router=express.Router()
router.post('/createproduct',verifytoken,productcreation)
// 66a4b4bc9ff4d66dd912f87c -p
router.post('/updateproduct/:id',verifytoken,updateproduct)
export default router