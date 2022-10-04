const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.1];
const notasBaixas1 = [];
for(let i in notas) {
    if(notas[i] <= 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);
const notasBaixas2 = notas.filter(function(nota) {  // Função "callback".
    return nota <= 7;
});
console.log(notasBaixas2);
const notasAbaixo7 = nota => nota <= 7;  // Função "arrow".
const notasBaixas3 = notas.filter(notasAbaixo7);
console.log(notasBaixas3);