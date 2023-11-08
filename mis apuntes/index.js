console.log(contador)

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
        bomba: "bomnba"
    }
]

colores.includes("nashe")
const console = Object.values(colores) // muestra los valores del array
const consoles = Object.entries(colores) // no se usaa menudo pero son arrays dentro de arrays
const consola = Object.keys(colores) // muestra las propiedas o a los que se le asigna un valor



const nombre = "            pepee                "
const nombreLimpio = nombre.trim();



const fs = require('fs') // similar a: import fs from 'fs' o tmb import React from 'react'
fs.writeFileSync('notes.txt', 'un string cualquiera')

if(fs.existsSync('clases.text')){
    console.log('existe')
    
}