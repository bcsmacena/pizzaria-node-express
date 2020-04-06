const Cardapio = require('../models/Cardapio')

let cardapioController = {
    listarCardapio: (req, res) => { 
        let listaDePizza = Cardapio.listarCardapio();
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
        const [fotoPizza] = req.files;
        Cardapio.cadastrarPizza(nomePizza,precoPizza, fotoPizza.filename);
        res.redirect('/cardapio/visualizar');
    },
    deletarPizza: (req, res) => {
        let {posicao} = req.params;
        Cardapio.deletarPizza(posicao);
        res.redirect('/cardapio/visualizar');
    },
    formAlterar: (req, res) => {
        let {posicao} = req.params;
        const pizza = Cardapio.buscarPizza(posicao);
        return res.render('alterarCardapio', {pizza, posicao});
    },
    alterarPizza: (req,res) => {
        let {nomePizza, precoPizza, posicao} = req.body;

        let pizza = Cardapio.atualizarPizza(nomePizza, precoPizza, posicao);
        
        return res.render('alterarCardapio', {pizza, posicao, msg:"Pizza Atualizada com sucesso!"});
    }
}

module.exports = cardapioController