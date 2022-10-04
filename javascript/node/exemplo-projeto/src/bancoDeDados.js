const sequence = {  // Criação de um objeto.
    _id: 1,
    get id() { return this._id++}  // Função "get" retorna o atributo "_id".
}
const produtos = {};  // Objeto.
function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto;
    return produto;
}
function getProduto(id) {
    // Retorno de um objeto vazio, caso não encontre nada.
    return produtos[id] || {};
}
function getProdutos() {
    return Object.values(produtos);
}
function excluirProduto(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto};