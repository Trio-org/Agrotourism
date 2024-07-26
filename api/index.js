import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import authrouter from './routers/auth.route.js'
const app = express()
dotenv.config()
app.use(json())
app.use(helmet())
app.use(cookieParser())


const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

const main = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('database connected');
    } catch (err) {
        console.error(err);
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected !');
})

app.get('/', (req, res) => {
    res.send('hello umbi!')
})
app.use('/auth',authrouter)

//middleware
// app.use('/api/auth', RouteName)

main().catch((err) => console.log(err))

app.listen(8001, () => {
    console.log('server listening on 8001');
})
