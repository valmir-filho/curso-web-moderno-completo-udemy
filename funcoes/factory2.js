function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto("Notebook", 1243.43));
console.log(criarProduto("Celular", 700.45));