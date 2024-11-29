const joi = require('joi')

const id = joi.number().positive()
const name = joi.string().min(3)
const lastName = joi.string().min(2)
const email = joi.string().email()
const password = joi.string()


const createUserSchema = joi.object({
    name: name.required(),
    lastName: lastName.required(),
    email : email.required(),
    password: password.required().min(8)
})

const updateUserSchema = joi.object({ 
    name: name.required(),
    lastName: lastName.required(),
    email : email.required(),
})

const updateUserPasswordSchema = joi.object({
    id: id.required(),
    password: password.required()

})
const getUserSchema = joi.object({
    id: id.required()
})


module.exports = {createUserSchema,updateUserSchema,getUserSchema}