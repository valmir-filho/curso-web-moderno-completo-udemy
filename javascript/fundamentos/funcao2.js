// Armazenamento de uma função em uma constante.
const imprimirSoma = function(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
// Armazenamento de uma função arrow em uma constante.
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));
// Criação de uma função arrow reduzida (retorno implícito).
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));