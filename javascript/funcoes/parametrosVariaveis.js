function soma() {
    let soma = 0;
    for(i in arguments) {  // "Arguments" é um array interno de uma função.
        soma += arguments[i];
    }
    return soma;
}
console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));