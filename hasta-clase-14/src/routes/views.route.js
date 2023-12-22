const { Router } = require('express');
const { ProductManager } = require('../Managers/productManager');
const router = Router();

const productsMock = new ProductManager('./src/mock/Productos.json');

router.get('/', async (req, res) => {
const product = await productsMock.getProducts();
product.forEach(prd => {
    prd.price = new Intl.NumberFormat('es-ES', {style: 'decimal'}).format(prd.price)
})
console.log(product);
res.render('home', {
    title: 'Inicio',
    product,
    cssPlus:`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css`,
    scriptPlus:`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`,
    scriptView:'./js/home.js'
    });
});

router.get('/realTimeProducts', async (req, res) => {
const product = await productsMock.getProducts();
product.forEach(prd => {
    prd.price = new Intl.NumberFormat('es-ES', {style: 'decimal'}).format(prd.price)
    })
    res.render('realTimeProducts', {
    title: 'Productos en tiempo Real',
    product,
    cssPlus:`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css`,
    scriptPlus:`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`,
    scriptView:'./js/home.js'
    });
})

exports.viewsRouter = router;