const peso1 = 1.2;
const peso2 = Number("2.2");
const avaliacao1 = 9.87;
const avaliacao2 = 6.89;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(Number.isInteger(peso1));  // Comando "isInteger()" faz a verificação se o número é inteiro.
console.log(peso1);
console.log(peso2);
console.log(total.toFixed(0));  // Comando "toFixed" faz a definição do número de algarismos significativos após a vírgula.
console.log(media.toFixed(2));
console.log(media.toString());  // Comando "toString" faz a conversão do valor numérico em uma String.
console.log(media.toString(2));  // Comando "toString", com o parâmetro, faz a conversão do valor numérico em valor binário.