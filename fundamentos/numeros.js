const PESO1 = 1.2;
const PESO2 = Number("2.2");
const AVALIACAO1 = 9.87;
const AVALIACAO2 = 6.89;
const TOTAL = AVALIACAO1 * PESO1 + AVALIACAO2 * PESO2;
const MEDIA = TOTAL / (PESO1 + PESO2);
console.log(Number.isInteger(PESO1));  // Comando "isInteger()" faz a verificação se o número é inteiro.
console.log(PESO1);
console.log(PESO2);
console.log(TOTAL.toFixed(0));  // Comando "toFixed" faz a definição do número de algarismos significativos após a vírgula.
console.log(MEDIA.toFixed(2));
console.log(MEDIA.toString());  // Comando "toString" faz a conversão do valor numérico em uma String.
console.log(MEDIA.toString(2));  // Comando "toString", com o parâmetro, faz a conversão do valor numérico em valor binário.