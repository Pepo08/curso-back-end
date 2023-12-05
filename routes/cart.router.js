const { Router } = require("express")
const cartService = CartManager
const router = Router()

router.get("/:cid",async (req,res)=>{
    try{
    const cid = req.params
    const cart = await cartService.getCartById(cid)
    res.send({
        status: "success",
        payload: cart
    })
    }catch(error){
        return console.log(error)
    }
})

module.exports = router