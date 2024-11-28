import express from 'express'
import dotenv from 'dotenv'
import buildRoutes from './routes/index.route.js'
dotenv.config()

const app = express()


const PORT = process.env.PORT ?? 3000

buildRoutes(app)


app.listen(PORT,()=>{
    console.log(`running in port ${PORT}`)
})