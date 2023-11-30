const express = require("express")
const productsRouter = require("./routes/products.router.js")
const cartRouter = require("./routes/cart.router.js")

const app = express()
const PORT = 8080;

//app.use(express.urlencoded({extended: true}))
//app.use(express(express.json()))

app.use("/api/products", productsRouter)//ruta productos
app.use("/api/cart", cartRouter)        //ruta carrito

app.listen(PORT,() => {
    console.log("El server http://localhost:8080 esta prendido")
})