const { Router } = require("express")
const userRouter = require("./users.router.js")

const router = Router()

router.use("/api/users", ()=> userRouter)
router.use("/api/carts", ()=>{})
router.use("/api/products", ()=>{})

module.exports = router