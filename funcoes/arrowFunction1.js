// Criação de uma função de maneira tradicional.
let dobro = function(a) {
    return 2 * a;
}
console.log(dobro(2));
// Criação de uma função "arrow".
dobro = (a) => {
    return 2 * a;
}
console.log(dobro(4));
// Criação de uma função "arrow" reduzida (quando tem-se apenas 1 parâmetro).
dobro = (a) => 2 * a;
console.log(dobro(6));