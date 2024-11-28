const express = require('express')
const taskRoutes = require('./task.route.js')

const router = express.Router()

  

module.exports = function(app){
    app.get("/",(req,res)=>{res.send("WELCOME")})

    router.use("/tasks",taskRoutes)

    app.use('/api',router)
}
