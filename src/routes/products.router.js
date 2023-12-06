const { Router } = require("express")
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
        const product = await productService.getProductById(pid)
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
    .post("/", async (req,res) =>{ //para subir/crear un producto por id
        const newItem = req.body
        const products = productService.addProduct(newItem)
        if(products ===  `Ya se encuetra este producto en el lugar`){
            return res.send({
                status: "error",
                message: `Ya se encuetra este producto en el lugar`
            })
        }else if(products === error){
            return res.send({
                status: "error",
                message: `Se encontro el siguiente error ${error}`
            })
        }else if(products === "producto agregado"){
            return res.send({
                status: "success",
                message: "El producto fue agregado con exito"
            })
        }
        res.send("es "+pid)
    })
    .put("/:pid", async (req,res) =>{ //para actulizar un producto por el id
        const {pid} = req.params
        const product = await productService.getProductById(pid)
        if(!product){
            return res.send({
                status: "error",
                message: "no se pudo encontrar el producto con el id "+pid+ "para ser modificado"
            })
        }else{
            const updatePrd = productService.update
            return res.send({
                status: "success",
                payload: product
            })
        }
    })
    .delete("/:pid", async (req,res) =>{ //para eliminar un producto por el id
        const {pid} = req.params
        res.send("delete prd "+pid)
    })

module.exports = productRouter