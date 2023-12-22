const express = require("express")
const appRouter = require("./router")

const app = express()
const PORT = 8080

app
    .use(appRouter)
    .get("/", (req, res) =>{
        res.send('server ok')
    })
    .listen(PORT, err =>{
        if(err) console.log(err)
        console.log(`Server escuchando en puerto: ${PORT}`)
    })