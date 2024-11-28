import express from 'express'
import { validateRequest,properties } from '../middlewares/index.middleware.js'
import { createTaskSchema,updateTaskSchema,getTaskSchema } from '../schemas/task.schema.js'

const router = express.Router()



router.get("/",
    (req,res,next)=>{
        res.send("hola desde tasks")
    })
router.post("/",
    validateRequest(createTaskSchema,properties.body),    
    (req,res,next)=>{
    res.send("hola desde tasks")
})
router.get("/:id",
validateRequest(getTaskSchema,properties.params),    
(req,res,next)=>{
    try {
        
        res.send("hola desde tasks")
    } catch (error) {
        next(error)
    }
})
router.patch("/:id",
validateRequest(getTaskSchema,properties.params),
validateRequest(updateTaskSchema,properties.body),
(req,res,next)=>{
    res.send("hola desde tasks")
})
router.delete("/:id",
validateRequest(getTaskSchema,properties.params),    
(req,res,next)=>{
    res.send("hola desde tasks")
})


export default router