import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import DatabaseConnector from './database/DatabaseConnector'

dotenv.config()

const port: number = Number(process.env.SERVER_PORT) || 3000
const app: Express = express()

const connection = DatabaseConnector.connect()

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`)
})