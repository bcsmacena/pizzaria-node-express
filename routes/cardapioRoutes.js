const express = require('express');
const cardapioController = require('../controllers/cardapioController');

const route = express.Router();

// cadastrar pizza com preço

route.get('/cadastrar/:flavor/:preco', cardapioController.cadastrarPizza)

// visualizar itens cadastrados

route.get('/visualizar',  cardapioController.listarCardapio)

module.exports = route