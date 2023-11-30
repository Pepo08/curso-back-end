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
        const product = this.productos.find(x => x.id === produId)
        if(product){
            console.log(`Este productos existe, es ${product.title}`)
        }else{
            console.log(`Este productos no existe`)
        }
    }
    async updateProductById(id, obj){
        const index = this.productos.findIndex(producto => producto.id === id);
        if (index !== -1) {
            const updatedProduct = { ...this.productos[index], ...obj };
            this.productos[index] = updatedProduct;
            await fs.promises.writeFile("productos.json", JSON.stringify(this.productos));
            console.log(`El producto con id ${id} fue actualizado`);
            console.log(this.productos);
        } else {
            console.log(`No se encontró ningún producto con el id ${id}`);
        }
    }
    async deleteProductById(id){
        const productoEliminado = this.productos.filter(x => x.id !== id)
        await fs.promises.writeFile("productos.json", JSON.stringify(productoEliminado))
        this.productos = productoEliminado
        console.log(`El producto con el ${id} fue eliminado`)
        console.log(this.productos)
    }
}
const ticket = new ProductManager
ticket.addProductos('remeruqui', 'esta re copada esta', 10,'qsy', "sahg13",98)
ticket.addProductos('remui', 'esta re copada', 10,'nas',"ajsdha", 98)