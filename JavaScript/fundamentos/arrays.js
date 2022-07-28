const valores = [7.7, 8.9, 6.3, 9.2];  // Comando para criação de um "array".
valores[4] = 5.5;  // Comando para incluir um valor (nesse caso no índice 4) no "array".
valores.push(6.5);  // Outra forma para incluir um valor (nesse caso no índice 5) no "array".
console.log(valores);
console.log(valores[2]);  // Comando para consultar um dos valores do "array", de acordo com o índice definido.
console.log(valores.length);  // Comando para consultar o tamanho do "array".
valores.pop();  // Comando para exclusão do último valor do "array".
delete valores[0];  // Outra forma para exclusão de um valor do "array".
console.log(valores);