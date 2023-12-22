const { Router } = require("express")


const router = Router()

router
    .get("/", (req,res)=>{
        res.send("users")
    })
    .get("/:uid", (req,res)=>{
        res.send("users")
    })
    .post("/", (req,res)=>{
        res.send("users")
    })
    .put("/uid", (req,res)=>{
        res.send("users")
    })
    .delete("/uid", (req,res)=>{
        res.send("users")
    })


module.exports = router