const express = require('express');
const cardapioController = require('../controllers/cardapioController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'img'))
    },
    filename: function (req, file, cb) {
        let nomeImg = Date.now() + '-' + req.body.nomePizza.replace(/\s/g, '') + path.extname(file.originalname);
        cb(null, nomeImg);
    }
  })
   
  const upload = multer({ storage: storage })

const route = express.Router();

// cadastrar pizza com preço

route.get('/cadastrar/:flavor/:preco', cardapioController.cadastrarPizza)

// visualizar itens cadastrados

route.get('/visualizar',  cardapioController.listarCardapio)

// cadastro de itens

route.get('/cadastro', cardapioController.formCadastro);
route.post('/cadastro', upload.any(), cardapioController.salvarCadastro);

// remoção de itens
route.delete('/deletar/:posicao', cardapioController.deletarPizza);

//update
route.get('/alterar/:posicao', cardapioController.formAlterar);
route.put('/alterar', cardapioController.alterarPizza);

module.exports = route