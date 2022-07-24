/* Utilizando a estrutura switch, faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realiza com os valores numéricos na ordem em que foram inseridos. Por exemplo: 
calculadora (2, "+"", 3). A função efetuará a soma de 2 e 3. Crie um caso default para operações inválidas. */
function calculadora(valor1, operacao, valor2) {
    switch(operacao) {
        case "+":
            let resultadoAdicao = (valor1 + valor2).toFixed(2);    
            console.log("Operação escolhida: ADIÇÃO.")    
            console.log(`RESULTADO: ${valor1} + ${valor2} = ${resultadoAdicao}.`);
            break;
        case "-":
            let resultadoSubtracao = (valor1 - valor2).toFixed(2);    
            console.log("Operação escolhida: SUBTRAÇÃO.")    
            console.log(`RESULTADO: ${valor1} - ${valor2} = ${resultadoSubtracao}.`);
            break;
        case "*":
            let resultadoMultiplicacao = (valor1 * valor2).toFixed(2);    
            console.log("Operação escolhida: MULTIPLICAÇÃO.")    
            console.log(`RESULTADO: ${valor1} * ${valor2} = ${resultadoMultiplicacao}.`);
            break;
        case "/":
            let resultadoDivisao = (valor1 / valor2).toFixed(2);    
            console.log("Operação escolhida: DIVISÃO.")    
            console.log(`RESULTADO: ${valor1} / ${valor2} = ${resultadoDivisao}.`);
            break;
        default:
            console.log("Operação inválida!");
    }
}
calculadora(15, "+", 2);
console.log();
calculadora(15, "-", 2);
console.log();
calculadora(15, "*", 2);
console.log();
calculadora(15, "/", 2);
console.log();
calculadora(15, "%", 2);