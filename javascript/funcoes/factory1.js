const prod1 = {  // Criação tradicional de um objeto.
    nome: "Caneta",
    preco: 45
}
console.log(prod1);
const prod2 = {
    nome: "Borracha",
    preco: 30
}
console.log(prod2);
// Função "factory": função que retorna um objeto.
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Camargo"
    }
}
console.log(criarPessoa());