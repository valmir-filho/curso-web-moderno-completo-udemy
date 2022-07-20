const VALORES = [7.7, 8.9, 6.3, 9.2];  // Comando para criação de um "array".
VALORES[4] = 5.5;  // Comando para incluir um valor (nesse caso no índice 4) no "array".
VALORES.push(6.5);  // Outra forma para incluir um valor (nesse caso no índice 5) no "array".
console.log(VALORES);
console.log(VALORES[2]);  // Comando para consultar um dos valores do "array", de acordo com o índice definido.
console.log(VALORES.length);  // Comando para consultar o tamanho do "array".
VALORES.pop();  // Comando para exclusão do último valor do "array".
delete VALORES[0];  // Outra forma para exclusão de um valor do "array".
console.log(VALORES);