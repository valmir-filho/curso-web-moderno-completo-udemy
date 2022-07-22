const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let i in notas) {
    console.log(`Índice: ${i} - Nota: ${notas[i]}`);
}
const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}
console.log();
for(let informacao in pessoa) {
    console.log(`${informacao} = ${pessoa[informacao]}`);
}