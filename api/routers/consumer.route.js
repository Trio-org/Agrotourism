import express from 'express'
import {verifytoken} from '../utils/verifytoken.js'
import { getallproducts, getproductbycategory } from '../controllers/product.control.js'
import { getallfarms } from '../controllers/farm.control.js'
const router=express.Router()
router.get('/getallproducts',getallproducts)
router.get('/getallfarms',getallfarms)
router.get('/productcategory/:category',getproductbycategory)
export default router