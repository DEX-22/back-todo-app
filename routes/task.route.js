const express = require( 'express')
const { validateRequest,properties } = require( '../middlewares/index.middleware.js')
const { createTaskSchema,updateTaskSchema,getTaskSchema } = require( '../schemas/task.schema.js')
const {models} = require("../libs/sequelize.lib.js")
const router = express.Router()
const boom = require("@hapi/boom")


router.get("/",
    async (req,res,next)=>{
        try {
            const data = await models.Task.findAll()
            
            res.json(data)
        } catch (error) {
            next(error)
        }
    })
router.post("/",
    validateRequest(createTaskSchema,properties.body),    
    async (req,res,next)=>{
        const PENDING = "pending"

        const body = req.body
        const newTask = await models.Task.create({...body,status: PENDING})
        
        res.json(newTask)
})
router.get("/:id",
validateRequest(getTaskSchema,properties.params),    
async (req,res,next)=>{
    try {
        const id = req.params.id
        const data = await models.Task.findByPk(id)
        
        if(!data) throw boom.notFound("Task not found")

        res.json(data)

    } catch (error) {
        next(error)
    }
})
router.patch("/:id",
validateRequest(getTaskSchema,properties.params),
validateRequest(updateTaskSchema,properties.body),
async (req,res,next)=>{
    try {
        const id = req.params.id
        const data = await models.Task.findByPk(id)
        
        if(!data) throw boom.notFound("Task not found") 
        const changed = req.body
        const updated = await data.update({
            ...changed, updatedAt: new Date()
        })

        res.json(updated)

    } catch (error) {
        next(error)
    }
})
router.delete("/:id",
validateRequest(getTaskSchema,properties.params),    
async (req,res,next)=>{
    try {
        const id = req.params.id
        const data = await models.Task.findByPk(id)
        
        if(!data) throw boom.notFound("Task not found") 
        const changed = req.body
        const deleted = await data.destroy(id)

        res.json(deleted)

    } catch (error) {
        next(error)
    }
})


module.exports = router