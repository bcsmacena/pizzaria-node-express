const express = require('express');

// ativa o sistema de rotas
const route = express.Router();

// cria a rota e o comportamento de resposta
route.get("/:nome", (req, res) => {
    
    let {nome} = req.params;
    res.send(`Seja bem vindo ${nome}`);
})

module.exports = route;