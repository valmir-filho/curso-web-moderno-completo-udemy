/* O cardápio de uma lanchonete é o seguinte:
1) Código: 100 - Produto: Cachorro-Quente - Preço: R$3,00
2) Código: 200 - Produto: Hambúrguer Simples - Preço: R$4,00
3) Código: 300 - Produto: Cheeseburguer Preço: R$5,50
4) Código: 400 - Produto: Bauru Preço: R$7,50
5) Código: 500 - Produto: Refrigerante Preço: R$3,50
6) Código: 600 - Produto: Suco - R$2,80
Implemente uma função que receba como parâmetros o código do item pedido e a quantidade, calculando o valor a ser pago pelo lanche. Considere que a cada execução
somente será calculado um item. Use o comando switch, criando um caso default para produto não existente. */
function valorLanche(codigo, quantidade) {
    switch(codigo) {
        case 100:
            let valorLanche1 = (quantidade * 3).toFixed(2);
            console.log("Lanche consumido: Cachorro-Quente.");
            console.log(`Valor da conta: R$${valorLanche1}.`);
            break;
        case 200:
            let valorLanche2 = (quantidade * 4).toFixed(2);
            console.log("Lanche consumido: Hambúrguer Simples.");
            console.log(`Valor da conta: R$${valorLanche2}.`);
            break;
        case 300:
            let valorLanche3 = (quantidade * 5.5).toFixed(2);
            console.log("Lanche consumido: Cheeseburguer.");
            console.log(`Valor da conta: R$${valorLanche3}.`);
            break;
        case 400:
            let valorLanche4 = (quantidade * 7.5).toFixed(2);
            console.log("Lanche consumido: Bauru.");
            console.log(`Valor da conta: R$${valorLanche4}.`);
            break;
        case 500:
            let valorLanche5 = (quantidade * 3.5).toFixed(2);
            console.log("Lanche consumido: Refrigerante.");
            console.log(`Valor da conta: R$${valorLanche5}.`);
            break;
        case 600:
            let valorLanche6 = (quantidade * 2.8).toFixed(2);
            console.log("Lanche consumido: Suco.");
            console.log(`Valor da conta: R$${valorLanche6}.`);
            break;
    }
}
valorLanche(100, 3);
console.log();
valorLanche(200, 3);
console.log();
valorLanche(300, 3);
console.log();
valorLanche(400, 3);
console.log();
valorLanche(500, 3);
console.log();
valorLanche(600, 3);
