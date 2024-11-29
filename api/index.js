const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const buildRoutes = require('./routes/index.route.js')
const setupAuth = require('../utils/auth/index.js')
const {buildMiddlewares} = require('./middlewares/index.middleware.js')
const boom = require("@hapi/boom")


dotenv.config()
const PORT = process.env.PORT ?? 3000
const app = express()
app.use(express.json())

const whiteList = [process.env.FRONT_URL]
const options = {
        origin:(origin,callback)=>{
                if(whiteList.includes(origin))
                    callback(null,true)
            else
                callback(boom.unauthorized())
        }
    }
    
    
    
    app.use(cors(options ))
    
setupAuth(app)
buildRoutes(app)

buildMiddlewares(app)

app.listen(PORT,()=>{
    console.log(`running in port ${PORT}`)
})