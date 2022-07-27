const porta = 3003;
const express = require("express");  // Importação do "express" (carregamento do arquivo "index.js").
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados.js");
app.use(bodyParser.urlencoded({extended: true}));
// Comando "get" é uma forma de requisição.
app.get("/produtos", (req, res, next) => {  // Função middleware.
    res.send(bancoDeDados.getProdutos())  // Conversão para JSON.
})
app.get("/produtos/:id", (req, res, next) => {  // Função "middleware" para "pegar" as informações.
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post("/produtos", (req, res, netx) => {  // Função para "coletar" as informações.
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto);  // Conversão de um objeto em um "JSON".
})    
app.put("/produtos/:id", (req, res, next) => {  // Funçõa para fazer a alteração.
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto);  // Conversão de um objeto em um "JSON".
})
app.delete("/produtos/:id", (req, res, next) => {  // Função para fazer a exclusão.
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto);  // Conversão de um objeto em um "JSON".    
})
app.listen(porta, () => {  // Função "callback".
    console.log(`Servidor está executando na porta ${porta}.`);
})