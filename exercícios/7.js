/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */
function bhaskara(a, b, c) {
    let discriminante = b ** 2 - 4 * a * c;
    let x1 = ((- b + Math.sqrt(discriminante)) / (2 * a)).toFixed(2);
    let x2 = ((- b - Math.sqrt(discriminante)) / (2 * a)).toFixed(2);
    if(discriminante > 0) {
        console.log(`Discriminante = ${discriminante}.`);
        console.log("A equação possui 2 raízes reais.");
        console.log(`X1 = ${x1}`);
        console.log(`X2 = ${x2}`);
    } else if(discriminante == 0) {
        console.log(`Discriminante = ${discriminante}.`);
        console.log("A equação possui apenas 1 raiz real.");
        console.log(`X1 = ${x1}`);
        console.log(`X2 = ${x2}`);
    } else {
        console.log(`Discriminante = ${discriminante}.`);
        console.log("A equação não possui raízes reais.");
    }
}
bhaskara(-1, 2, 3);
console.log();
bhaskara(-2, 20, -50);
console.log();
bhaskara(2, -1, 3);