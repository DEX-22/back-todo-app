const express = require('express')
const taskRoutes = require('./task.route.js')
const authRoutes = require('./auth.route.js')
const passport = require('passport')

const router = express.Router()

  

module.exports = function(app){
    // app.get("/",(req,res)=>{res.send("WELCOME")})

    // router.use("/tasks",
    //     passport.authenticate('jwt',{session:false})
    //     ,taskRoutes)

    router.use("/auth",authRoutes)
    
    app.use('/api',router)
}
