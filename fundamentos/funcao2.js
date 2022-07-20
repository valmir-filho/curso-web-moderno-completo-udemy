// Armazenamento de uma função em uma constante.
const IMPRIMIRSOMA = function(a, b) {
    console.log(a + b);
}
IMPRIMIRSOMA(2, 3);
// Armazenamento de uma função arrow em uma constante.
const SOMA = (a, b) => {
    return a + b;
}
console.log(SOMA(2, 3));
// Criação de uma função arrow reduzida (retorno implícito).
const SUBTRACAO = (a, b) => a - b;
console.log(SUBTRACAO(2, 3));