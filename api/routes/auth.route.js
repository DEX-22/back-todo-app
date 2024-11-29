const express = require('express')
const { validateRequest, properties } = require('../middlewares/index.middleware.js')
const { createUserSchema } = require('../schemas/user.schema.js')
const { LoginSchema } = require('../schemas/auth.schema.js')
const UserService = require("../services/user.service.js")
const jwt = require("jsonwebtoken")
const config = require("../config/config.js")

const passport = require("passport")
const router = express.Router()
 
const service = new UserService()


router.post("/login",  
    passport.authenticate('local',{session:false}),
    async (req, res, next) => {
        try {  
            const secret = config.jwtSecret
            const user = req.user
            const payload = {sub: user.id }

            const token = jwt.sign(payload,secret)


            res.json({user,token})
        } catch (error) {
            next(error)
        }
    })


router.post("/register",
    validateRequest(createUserSchema, properties.body),
    async (req, res, next) => {
        try {
            const body = req.body

            const newTask = await service.create(body)

            res.json(newTask)
        } catch (error) {
            next(error)
        }
    }) 

 
module.exports = router