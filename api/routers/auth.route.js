import express from 'express'
import { registercontrol,logincontrol } from '../controllers/auth.control.js '
import {  forgetpass, getrole} from '../controllers/auth.control.js'
const router=express.Router()

router.post('/register',registercontrol)
router.post('/login',logincontrol)
router.post('/forgetpass',forgetpass)
router.post('/getrole',getrole)
// router.post('/verifyotp',verifyotp)
export default router