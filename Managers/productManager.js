const fs = require('node:fs')
const path = '../mockDB/productos.json'
class ProductManager {
    constructor() {
        this.path = path
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
    getProducts = async () => {
        try {
            return await this.path.readFile()
        } catch (error) {
            return 'No hay productos'
        }
    }
    getProductById = async (pid) => {
        try {
            const products = await this.readFile()
            if (!products) return 'No hay productos'
            return products.find(product => product.id === pid)
        } catch (error) {
            return new Error(error)
        }
    }
    addProduct = async (newItem) => {
        try {
            let products = await this.readFile()
            const productDb = products.find(product => product.id === newItem.id)
            console.log(productDb)
            if (productDb) {
                return `Ya se encuetra este producto en el lugar`
            }else{
                if (products.length === 0) {
                    newItem.id = 1
                    products.push(newItem)
                } else {
                    products = [...products, { ...newItem, id: products.length + 1 }]
                }
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8')
                return "producto agregado"
            }
        } catch (error) {
            return new Error(error)
        }
    }
    async update(pid, updateToProduct) {
        let products = await this.readFile()
        const productIndex = products.findIndex(product => pid === product.id)
        if (productIndex !== -1) { 
            products[productIndex] = updateToProduct
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8')
        return 'producto acualizado'
    }
}
const ticket = new ProductManager
ticket.addProduct("remera")
ticket.addProduct("remer")
ticket.addProduct("reme")
ticket.addProduct("rem")
ticket.addProduct("re")
module.exports = ProductManager