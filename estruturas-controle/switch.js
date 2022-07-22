const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {  // Comando "Math.floor" faz o arredondamento para baixo.
        case 10: case 9:
            console.log("Quadro de honra!");
            // Sem o comando "break", o comando "switch" executará todos os casos que se encaixarem no parâmetro.
            break;
        case 8: case 7:
            console.log("Aprovado!");
            break;
        case 6: case 5: case 4:
            console.log("Recuperação!");
            break;
        case 3: case 2: case 1: case 0:
            console.log("Reprovado!");
            break;
        default:
            console.log("Nota inválida!")
    }
}
imprimirResultado(9);
imprimirResultado(7.6);
imprimirResultado(5);
imprimirResultado(2);
imprimirResultado(12);