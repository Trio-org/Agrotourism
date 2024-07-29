import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authrouter from './routers/auth.route.js'
import logger from './logs/logErr.js'
import farmerroute from './routers/farm.route.js'
import productrouter from './routers/product.route.js'
import consumerrouter from './routers/consumer.route.js'
const app = express()
dotenv.config()
app.use(json())
app.use(helmet())

app.use(cookieParser());
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

// Use morgan with winston
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

const main = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        logger.info('Database connected');
    } catch (err) {
        logger.error('Database connection error: ' + err.message);
    }
}

mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB disconnected!');
})

app.get('/', (req, res) => {
    res.send('hello umbi!')
})
app.use('/auth',authrouter)
app.use('/farmer',farmerroute)
app.use('/farmer',productrouter)
app.use('/consumer',consumerrouter)
// Middleware
// app.use('/api/auth', RouteName)

main().catch((err) => logger.error('Error starting the application: ' + err.message))

app.listen(8001, () => {
    logger.info('Server listening on port 8001');
})
