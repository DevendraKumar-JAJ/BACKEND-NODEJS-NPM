import express from 'express'
import { handleSignup , handleLogin, handleLogout} from '../controllers/auth.controller.js'
const authRoutes=express.Router()

authRoutes.post('/signup',handleSignup)
authRoutes.post('/login',handleLogin)
authRoutes.post('/logout',handleLogout)




export default authRoutes