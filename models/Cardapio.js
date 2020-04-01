let cardapio = [
    {flavour: "Mussarela", preco: "R$ 25,00", img: "pizza-mussarela.jpg"},
    {flavour: "Frango com Catupiry", preco: "R$ 45,00", img: "pizza-frango-catupiry.jpg"},
    {flavour: "Calabresa", preco: "R$ 27,00", img: "pizza-calabresa.jpg"}
];

let listarCardapio = () => cardapio 

let cadastrarPizza = (flavour, preco) => {
    let novaPizza = {
        flavour,
        preco,
        img: 'pizza-mussarela.jpg'
    }
    return cardapio.push(novaPizza);
}

let deletarPizza = (posicao) => {
    return cardapio.splice(posicao, 1);
}

module.exports = {listarCardapio, cadastrarPizza, deletarPizza}