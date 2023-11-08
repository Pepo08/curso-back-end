class TicketManager{
    productos = []
    ultimoProduAñadido =[
    titulo = "",
    descripcion = "",
    precio = 0,
    imgen = "",
    code = "",
    inventario = '']
    constru(){}
    addProductos(tittle, descrip, pre, img, stock, ){
        this.ultimoProduAñadido.titulo = tittle, 
        this.ultimoProduAñadido.descripcion= descrip, 
        this.ultimoProduAñadido.precio= pre, 
        this.ultimoProduAñadido.imgen = img, 
        this.ultimoProduAñadido.inventario = stock, 
        this.ultimoProduAñadido.code = Math.floor(Math.random()*(100-1)+1)

        this.productos.push(tittle,descrip,pre,img,stock,this.code)
    }
}

const ticket = new TicketManager
ticket.addProductos('remeruqui', 'esta re copada esta', 10,'qsy', 98)
ticket.addProductos('remui', 'esta re copada esta', 10,'qsy', 98)
ticket.addProductos('ruqui', 'esta re copada esta', 10,'qsy', 98)
ticket.addProductos('remer', 'esta re da esta', 10,'qsy', 98)
console.log(ticket)
