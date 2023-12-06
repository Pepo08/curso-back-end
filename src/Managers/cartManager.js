const fs = require("fs")
class CartManager{ //Daos (data access obj)
    constructor(){
        this.path = "../mockDB/Carts.json"
    }
    readFile = async () => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            console.log(data)
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }
    crateCart =  async (newcart) =>{
        const carts = this.readFile()
        if(carts.length === 0){
            newcart = {id: 1, products:[]}
        }else{
            newcart = {id: carts.length + 1, products: [] }
        }
        carts.push(newcart)
        const results = await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 2), "utf-8")
        return results
    }
    getCartById = async (cid) =>{
        carts = await this.readFile()
        const cart = carts.find(x=> x.id === cid)
        if(!cart){
            return "no se encuentra en el carrito"
        }
        return cart
    }
    addProduct = async (cid, pid) =>{
        const carts = await this.readFile()
        const cartIndex = carts.findIndex(x=> x.id === cid)
        if(cartIndex ==! -1){
            return "No sene encuentra en el carrito"
        }
        carts[cartIndex].products = {productId: pid}
        const results = await fs.promises.writeFile(this.path, JSON.stringify(carts, bull, 2), "utf-8")
        return results
    }
}

[
    {id: 1, products:[]},
    {id: 2, products:[]},
    {id: 3, products:[]}
]

module.export = CartManager