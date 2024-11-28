import express from 'express'
import dotenv from 'dotenv'
import buildRoutes from './routes/index.route.js'
import buildMiddlewares from './middlewares/index.middleware.js'
dotenv.config()
const PORT = process.env.PORT ?? 3000
const app = express()


 
app.use(express.json())

buildRoutes(app)

buildMiddlewares(app)

app.listen(PORT,()=>{
    console.log(`running in port ${PORT}`)
})