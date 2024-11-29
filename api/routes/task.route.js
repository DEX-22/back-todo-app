const express = require('express')
const { validateRequest, properties } = require('../middlewares/index.middleware.js')
const { createTaskSchema, updateTaskSchema, getTaskSchema } = require('../../schemas/task.schema.js')
const router = express.Router()

const TaskService = require("../../services/task.service.js")
const service = new TaskService()

router.get("/",

    passport.authenticate('jwt',{session:false}),
    async (req, res, next) => {
        try {
            const data = await service.findAll()

            res.json(data)
        } catch (error) {
            next(error)
        }
    })
router.post("/",

    passport.authenticate('jwt',{session:false}),
    validateRequest(createTaskSchema, properties.body),
    async (req, res, next) => {
        try {
            const body = req.body

            const newTask = await service.create(body)

            res.json(newTask)
        } catch (error) {
            next(error)
        }
    })
router.get("/:id",

    passport.authenticate('jwt',{session:false}),
    validateRequest(getTaskSchema, properties.params),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const data = await service.findOne(id)

            res.json(data)

        } catch (error) {
            next(error)
        }
    })
router.patch("/:id",
    passport.authenticate('jwt',{session:false}),
    validateRequest(getTaskSchema, properties.params),
    validateRequest(updateTaskSchema, properties.body),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const changed = req.body

            const updated = await service.update(id, changed)

            res.json(updated)

        } catch (error) {
            next(error)
        }
    })
router.delete("/:id",

    passport.authenticate('jwt',{session:false}),
    validateRequest(getTaskSchema, properties.params),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const deleted = await service.delete(id)

            res.json(deleted)

        } catch (error) {
            next(error)
        }
    })


module.exports = router