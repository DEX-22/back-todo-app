import express from 'express'
import taskRoutes from './task.route.js'

const router = express.Router()

  

export default function(app){
    app.get("/",(req,res)=>{res.send("WELCOME")})

    router.use("/tasks",taskRoutes)

    app.use('/api',router)
}
