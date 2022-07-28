// Criação de uma função de forma literal.
function funcao1() {}
// Armazenamento de uma função dentro de uma variável.
const funcao2 = function() {}
// Armazenamento de uma função dentro de um "array".
const array1 = [function() {}];
// Outra forma de armazenamento de uma função dentro de um "array".
const array2 = [function(a, b) {return a + b}];
console.log(array2[0](2, 3));
// Outra forma de armazenamento de uma (ou mais) função(ões) dentro de um "array".
const array3 = [funcao1, funcao2];
// Armazenamento de uma função em um atributo de objeto.
const objeto = {};
objeto.falar = function() {
    return "Teste";
}
console.log(objeto.falar());
// Função como parâmetro de outra função.
function run(fun) {
    fun()  // Invocando a função.
}
run(function() {
    console.log("Executando...");
})
// Função como retorno de outra função.
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4);