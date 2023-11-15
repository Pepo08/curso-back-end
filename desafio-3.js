const express = require("express")
const app = express();

app.get("/usuarios/guille",(req, res) => {
    res.json("guille");
})