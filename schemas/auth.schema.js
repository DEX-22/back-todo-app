const joi = require('joi')

const id = joi.number().positive()
const name = joi.string().min(3)
const lastName = joi.string().min(2)
const email = joi.string().email()
const password = joi.string()


const LoginSchema = joi.object({ 
    email : email.required(),
    password: password.required()
})
  

module.exports = {LoginSchema}