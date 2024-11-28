import express from 'express'

const router = express.Router()



router.get("/",(req,res)=>{
    res.send("hola desde tasks")
})
router.post("/",(req,res)=>{
    res.send("hola desde tasks")
})
router.get("/:id",(req,res)=>{
    res.send("hola desde tasks")
})
router.patch("/:id",(req,res)=>{
    res.send("hola desde tasks")
})
router.delete("/:id",(req,res)=>{
    res.send("hola desde tasks")
})


export default router