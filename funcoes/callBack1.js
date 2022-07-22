const fabricantes = ["Mercedez", "Audi", "BMW"];
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}
fabricantes.forEach(imprimir);
console.log();
fabricantes.forEach(function(fabricante) {
    console.log(fabricante
        );
})