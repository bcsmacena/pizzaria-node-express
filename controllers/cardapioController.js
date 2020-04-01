const Cardapio = require('../models/Cardapio')

let cardapioController = {
    listarCardapio: (req, res) => { 
        let listaDePizza = Cardapio.listarCardapio();
        //res.send(listaDePizza);
        res.render("cardapio", {listaDePizza});
    },
    cadastrarPizza: (req, res) => {
        let {flavor} = req.params;
        let {preco} = req.params;
        res.send(`Pizza sabor ${flavor} adicionada por ${preco}`)
    },
    formCadastro: (req, res) => {
        res.render('cadastroCardapio')
    },
    salvarCadastro: (req, res) => {
        const {nomePizza, precoPizza} = req.body;
        Cardapio.cadastrarPizza(nomePizza,precoPizza);
        res.redirect('/cardapio/visualizar');
    },
    deletarPizza: (req, res) => {
        let {posicao} = req.params;
        Cardapio.deletarPizza(posicao);
        res.redirect('/cardapio/visualizar');
    }
}

module.exports = cardapioController