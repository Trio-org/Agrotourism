import express from 'express'
import { registercontrol,logincontrol } from '../controllers/auth.control.js '
const router=express.Router()

router.post('/register',registercontrol)
router.post('/login',logincontrol)

export default router