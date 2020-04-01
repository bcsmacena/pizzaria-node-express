const express = require('express');
const cardapioController = require('../controllers/cardapioController');

const route = express.Router();

// cadastrar pizza com preço

route.get('/cadastrar/:flavor/:preco', cardapioController.cadastrarPizza)

// visualizar itens cadastrados

route.get('/visualizar',  cardapioController.listarCardapio)

// cadastro de itens

route.get('/cadastro', cardapioController.formCadastro);
route.post('/cadastro', cardapioController.salvarCadastro);

// remoção de itens
route.delete('/deletar/:posicao', cardapioController.deletarPizza);

module.exports = route