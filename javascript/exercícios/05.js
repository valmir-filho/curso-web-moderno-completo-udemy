/* Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando fazemos o seguinte comando no console: 
"console.log(0.1 + 0.2);"? O resultado será: 0.30000000000000004. Outra coisa importante de se observar, é o fato de que o ponto é utilizado no lugar
da vírgula e vice versa. Com isso, faça um exercício para mostrar um valor monetário sempre da forma correta. Desenvolva uma função que receba o valor
R$0.30000000000000004 e retorne R$0,30. */
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$${valorDecimal.toFixed(2).toString().replace(".", ",")}`;
    console.log(valorEmReais);
}
formatarValorDecimal(0.1 + 0.2);
