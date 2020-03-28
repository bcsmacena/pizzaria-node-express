const express = require('express');

// ativa o sistema de rotas
const route = express.Router();

// cria a rota e o comportamento de resposta
route.get("/", (req, res, next) => {
    return res.render('index');
});

module.exports = route;