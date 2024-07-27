import express from 'express'
import { farmcreation, farmdelete, getfarmlisting, updatefarm } from '../controllers/farm.control.js'
import {verifytoken} from '../utils/verifytoken.js'
const router=express.Router()
router.post('/createfarm',verifytoken,farmcreation)
router.post('/updatefarm/:id',verifytoken,updatefarm)
router.delete('/deletefarm/:id',verifytoken,farmdelete)
router.get('/getfarmlisting/:id',verifytoken,getfarmlisting)

export default router