// const express=require('express')
import express from 'express'
import dotenv from 'dotenv'
const app=express()
// const conn=require('../db/connectDB')
import { connectDB } from './db/connectDB.js'
import authRoutes from './routes/auth.routes.js'
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
  connectDB()
  console.log(PORT)
})

app.use(express.urlencoded({extended: true
}))


app.use('/api/auth',authRoutes)

app.use((req,res)=>{
  console.log(req.path)
  res.send('Path not found')
})

