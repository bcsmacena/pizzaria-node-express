const fs = require('fs');
const path = require('path');

cardapioBD = path.join('cardapio.json');

let listarCardapio = () => {
    
    let cardapioJson = fs.readFileSync(cardapioBD, {encoding: 'utf-8'});
    cardapio = JSON.parse(cardapioJson);

    return cardapio
} 

let cadastrarPizza = (flavour, preco, nomeImg) => {
    let novaPizza = {
        flavour,
        preco,
        img: nomeImg
    }

    let cardapioJson = fs.readFileSync(cardapioBD, {encoding: 'utf-8'});
    let cardapio = JSON.parse(cardapioJson);
    cardapio.push(novaPizza);
    cardapioJson = JSON.stringify(cardapio);
    fs.writeFileSync(cardapioBD, cardapioJson);
    
}

let deletarPizza = (posicao) => {
    
    let cardapioJson = fs.readFileSync(cardapioBD, {encoding: 'utf-8'});
    cardapio = JSON.parse(cardapioJson);
    cardapio.splice(posicao, 1);
    cardapioJson = JSON.stringify(cardapio);
    fs.writeFileSync(cardapioBD, cardapioJson);

}

let buscarPizza = (posicao) => {
    let cardapioJson = fs.readFileSync(cardapioBD, {encoding: 'utf-8'});
    cardapio = JSON.parse(cardapioJson);

    return cardapio[posicao];
}

let atualizarPizza = (flavour, preco, posicao) => {
    let pizza = {
        flavour,
        preco,
        img: 'pizza-mussarela.jpg'
    }
    let cardapioJson = fs.readFileSync(cardapioBD, {encoding: 'utf-8'});
    cardapio = JSON.parse(cardapioJson);

    cardapio[posicao] = pizza;

    fs.writeFileSync(cardapioBD, JSON.stringify(cardapio));

    return pizza;
}



module.exports = {listarCardapio, cadastrarPizza, deletarPizza, buscarPizza, atualizarPizza}