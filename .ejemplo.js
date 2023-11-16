const colores = [
    {
        palabra :"buenas"
    },
    {
        saludo :"hola"
    }, 
    {
        despedida : "buena"
    }, 
    {
        bomba: "ola"
    }
]

colores.includes("adiosss")
const a = Object.values(colores) // muestra los valores del array
const b = Object.entries(colores) // no se usaa menudo pero son arrays dentro de arrays
const c = Object.keys(colores) // muestra las propiedas o a los que se le asigna un valor
console.log(a)