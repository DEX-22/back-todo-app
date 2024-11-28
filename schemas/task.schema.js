import joi from 'joi'

const id = joi.number().positive()
const title = joi.string().min(3)
const description = joi.number()
const status = joi.string() 


const createTaskSchema = joi.object({
    title: title.required(),
    description: description.required()
})

const getTaskSchema = joi.object({
    id: id.required()
})
const updateTaskSchema = joi.object({
    title: title.required(),
    description: description.required(),
    status: status.required()
})

export {createTaskSchema,getTaskSchema,updateTaskSchema}