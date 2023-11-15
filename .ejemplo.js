class ProductManager {
    static id = 0; // variable estatica que nos ayudara a contar cuantos productos se crean y asignarles un id
    constructor() {
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock) { // Metodo que utiliaremos como plantilla para crear productos
        if (
            [title, description, price, thumbnail, code, stock].some( // Verificación de que todos los campos esten completos obligatoriamente
                (campoObligatorio) => campoObligatorio === undefined
            )
        ) {
            console.log(
                "Todos los campos son obligatorios. El producto no ha sido agregado."
            );
            return;
        }
        const productoExistente = this.products.find((prod) => prod.code === code); // Verificamos si existe algun producto con el code que se pasa por parametro
        if(productoExistente){
            console.log("este producto ya existe")
        }else{
            this.products.push({id: ++ProductManager.id,title,description,price,thumbnail,code,stock,});
        }
    }
    getProducts() { // metodo que imprime en consola el array con todos los productos creados hasta el momento
        return console.log(this.products);
    }
    getProductById(productId) { // metodo para encontrar un producto por su id
        const productoPorId = this.products.find((prod) => prod.id === productId); // verificación: si el id pasado por parametros pertenece a algun producto
        productoPorId
            ? console.log(`Este es el producto que busca: ${productoPorId.title}`) // si existe imprime esto con el tilte del producto
            : console.log("Este producto no existe"); // si no existe imprime esto
    }
}

const prodManInstancia = new ProductManager();
prodManInstancia.addProduct("title1","description1", 100,"imagen1","123abc", 10);
prodManInstancia.addProduct("title2","description2",200,"imagen2","456def",20);
prodManInstancia.addProduct("title3", "description3", 200, "imagen3", "789ghi");
prodManInstancia.getProducts(); 
prodManInstancia.getProductById(1);