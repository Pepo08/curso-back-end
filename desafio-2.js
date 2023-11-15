const fs = require("fs")
class ProductManager{
    static id = 0;
    constructor(){this.productos = []}
    
    addProductos(title, descripcion, precio, img,code, stock){
        if ([title, descripcion, precio,img,code,stock].some((camposNecesarios) => camposNecesarios === undefined)) {
            console.log("faltan campos por completar")
        }else{
            this.productos.push({id: ++ProductManager.id,title, descripcion, precio,img,code,stock})
            fs.writeFileSync("productos.json", JSON.stringify(this.productos))
        }
    }
    async getProducts(){
        const productosJson = await fs.promises.readFile("productos.json", "utf-8")
        console.log(`productos: ${productosJson}`)
    }
    async getProductByCode(produId){
        const product = fs.promises.readFile("productos.json", produId)
        if(product){
            console.log(`Este productos existe, es ${product.title}`)
        }else{
            console.log(`Este productos no existe`)
        }
    }
    async updateProductById(id, obj){
        
    }
    async deleteProductById(id){
        const productoEliminado = this.productos.filter(x => x.id !== id)
        await fs.promises.writeFile("productos.json", JSON.stringify(productoEliminado))
        console.log(`El producto con el ${id} fue eliminado`)
    }
}
const ticket = new ProductManager
ticket.addProductos('remeruqui', 'esta re copada esta', 10,'qsy', "sahg13",98)
ticket.addProductos('remui', 'esta re copada', 10,'nas',"ajsdha", 98)
ticket.deleteProductById(2)
ticket.getProducts()