const { Router } = require("express")
const UserDaoMongo = require("../Mongo/usersDaoMongo")

const router = Router()
const userService = new UserDaoMongo

router
    .get("/",async (req,res)=>{
        try{    
            const users = await userService.getUsers()
            res.send({
                status: "sucess",
                payload: users
            })
        }catch(error){
            console.log(error)
        }
        res.send("users")
    })
    .get("/:uid",async (req,res)=>{
        res.send("users")
    })
    .post("/",async (req,res)=>{

        res.send("users")
    })
    .put("/uid",async (req,res)=>{
        res.send("users")
    })
    .delete("/uid",async (req,res)=>{
        res.send("users")
    })


module.exports = router