const { Router } = reuire("express")
const ProductManager = require("../Managers/productManager")

const productRouter = Router()
const productService = new ProductManager()

productRouter
    .get("/", async (req,res) =>{ //tod0s los productos
        const products = await productService.getProducts()
        res.send({
            status: "success",
            payload: products
        })
    })
    .get("/:pid", async (req,res) =>{ //para conseguir un producto por el id
        const {pid} = req.params
        const product = await productService.getProductByID(pid)
        if(!product){
            return res.send({
                status: "error",
                message: "no se pudo encontrar el producto con el id "+pid
            })
        }else{
            return res.send({
                status: "success",
                payload: product
            })
        }
    })
    .post("/", async (req,res) =>{ //para subir/crear un producto por el id
        const product = req.body 
        res.send("es "+pid)
    })
    .put("/:pid", async (req,res) =>{ //para actulizar un producto por el id
        const {pid} = req.params
        res.send("pur prd "+pid)
    })
    .delete("/:pid", async (req,res) =>{ //para eliminar un producto por el id
        const {pid} = req.params
        res.send("delete prd "+pid)
    })

module.exports = productRouter