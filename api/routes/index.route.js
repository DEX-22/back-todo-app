const express = require('express')
const taskRoutes = require('./task.route.js')
const authRoutes = require('./auth.route.js')
const router = express.Router()

  

module.exports = function(app){
    app.get("/api/",(req,res)=>{res.send("WELCOME")})

    router.use("/tasks" ,taskRoutes)

    router.use("/auth",authRoutes)
    
    app.use('/api',router)
}
