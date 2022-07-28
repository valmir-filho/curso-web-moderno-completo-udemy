function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}
const produto = {
    nome: "Notebook",
    preco: 4589,
    desconto: 0.15,
    getPreco
}
global.preco = 20;
global.desconto = 0.1;
console.log(getPreco());
console.log(produto.getPreco());
const carro = {
    preco: 49990,
    desconto: 0.20
}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));
console.log(getPreco.call(carro, 0.17, "$"));
console.log(getPreco.apply(global, [0.17, "$"]));