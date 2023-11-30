class TicketManager{
    static code = 0;
    constructor(){this.productos = []}
    
    addProductos(title, descripcion, precio, img, stock){
        if ([title, descripcion, precio,img,stock].some((camposNecesarios) => camposNecesarios === undefined)) {
            console.log("faltan campos por completar")
        }else{
            this.productos.push({code: ++TicketManager.code,title, descripcion, precio,img,stock})
        }
    }
    getProducts(){
        console.log(this.prodcutos)
    }
    getProductByCode(produId){
        const product = this.productos.find((products) => products.code === produId);
        if(product){
            console.log(`Este productos existe, es ${product.title}`)
        }else{
            console.log(`Este productos no existe`)
        }
    }
}

const ticket = new TicketManager
ticket.addProductos('remeruqui', 'esta re copada esta', 10,'qsy', 98)
ticket.addProductos('remui', 'esta re copada', 10,'nas', 98)
ticket.addProductos('ruqui', 'esta re esta', 10,'opa', 98)
ticket.getProductByCode(3)
ticket.getProductByCode(6)
console.log(ticket)
