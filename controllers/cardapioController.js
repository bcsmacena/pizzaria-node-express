const Cardapio = require('../models/Cardapio')

let cardapioController = {
    listarCardapio: (req, res) => { 
        let listaDePizza = Cardapio.listarCardapio();
        res.send(listaDePizza);
    },
    cadastrarPizza: (req, res) => {
        let {flavor} = req.params;
        let {preco} = req.params;
        res.send(`Pizza sabor ${flavor} adicionada por ${preco}`)
    }
}

module.exports = cardapioController