// importa o módulo express
const express = require('express');
const methodOverride = require('method-override');

// importa o módulo de rotas de usuário
const rotasIndex = require('./routes/indexRoutes')
const rotasUsuario = require('./routes/userRoutes')
const rotasCardapio = require('./routes/cardapioRoutes')

// inicia o servidor 
const app = express();

//app.get("/", (req, res) => res.send("Home da Pizzaria Node Express"))

// Habilita o ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Habilita para receber info via query string
app.use(express.urlencoded({
    extended: true
}));


// Habilita os métodos PUT e DELETE
app.use(methodOverride('_method'));

// invoca as rotas de usuário
app.use('/', rotasIndex);
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);




// executa o servidor
app.listen(3000, () => console.log("Servidor OK! Porta 3000"));

