// importa o módulo express
const express = require('express');

// importa o módulo de rotas de usuário
const rotasUsuario = require('./routes/userRoutes')
const rotasCardapio = require('./routes/cardapioRoutes')

// inicia o servidor 
const app = express();

app.get("/", (req, res) => res.send("Home da Pizzaria Node Express"))

// invoca as rotas de usuário
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);


// executa o servidor
app.listen(3000, () => console.log("Servidor OK! Porta 3000"));

