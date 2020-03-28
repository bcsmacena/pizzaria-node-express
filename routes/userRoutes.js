const express = require('express');

// ativa o sistema de rotas
const route = express.Router();


var userController = require("../controllers/userControllers");

// cria a rota e o comportamento de resposta
route.get("/:nome", userController.index);

module.exports = route;