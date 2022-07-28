const escola = "Martiaço";
console.log(escola.charAt(4));  // Comando "charArt()" faz o retorno da letra da String, de acordo com o parâmetro definido.
console.log(escola.charCodeAt(4));  // Comando "charCodeAt()" faz o retorno do valor da tabela unicode (da letra da String, de acordo com o parâmetro definido).
console.log(escola.substring(3));  // Comando "substring()" faz o retorno da String, de acordo com o parâmetro definido).
console.log(escola.substring(0, 5));  // Comando "substring()" faz o retorno da String, de acordo com os parâmetros definidos, excluindo o último parâmetro).
console.log("Escola ".concat(escola).concat("!"));  // Comando "concat()" faz a concatenação das Strings.
console.log(escola.replace("a", "@"));  // Comando "replace()" faz a substituição na String, de acordo com o(s) parâmetro(s) definido(s).
console.log("Ana, Maria, Pedro".split(","));  // Comando "split()" faz a criação de um "array".