const express = require('express')
const dotenv = require('dotenv')
const buildRoutes = require('./routes/index.route.js')
const {buildMiddlewares} = require('./middlewares/index.middleware.js')
dotenv.config()
const PORT = process.env.PORT ?? 3000
const app = express()


 
app.use(express.json())

buildRoutes(app)

buildMiddlewares(app)

app.listen(PORT,()=>{
    console.log(`running in port ${PORT}`)
})