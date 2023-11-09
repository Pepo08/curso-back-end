class TicketManager{
    productos = []
    titulo = ""
    descripcion = ""
    precio = 0
    imgen = ""
    code = 0
    inventario = ''
    constru(){}
    addProductos(tittle, descrip, pre, img, stock, ){
        if (!this.getProductByCode(this.productos.code)) {
            this.titulo = tittle, 
            this.descripcion= descrip, 
            this.precio= pre, 
            this.imgen = img, 
            this.inventario = stock
            while(this.code < this.productos.length){
                this.code++;
            }
            this.productos.push(tittle,descrip,pre,img,stock,this.code)
            }else{
                console.log("El código del producto ya existe.");
        }
    }
    getProductByCode(code){
        const product = this.productos.find((productos) => productos.code === code);
        if (product) {
        return true;
        }
    }
}


const ticket = new TicketManager
ticket.addProductos('remeruqui', 'esta re copada esta', 10,'qsy', 98)
ticket.addProductos('remui', 'esta re copada', 10,'nas', 98)
ticket.addProductos('ruqui', 'esta re esta', 10,'opa', 98)
ticket.addProductos('remer', 'esta re da esta', 10,'se', 98)
console.log(ticket)
