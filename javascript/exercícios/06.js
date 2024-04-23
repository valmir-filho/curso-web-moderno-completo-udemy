/* Elabore duas funções que recebam três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da
aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. */
function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let calculoJurosSimples = (capitalInicial * (1 + taxaJuros * tempoAplicacao)).toFixed(2);
    console.log(`Montante (juros simples) = R$${calculoJurosSimples}`);
}
jurosSimples(100, 0.1, 2);
function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let calculoJurosCompostos = (capitalInicial * (1 + taxaJuros) ** tempoAplicacao).toFixed(2);
    console.log(`Montante (juros compostos) = R$${calculoJurosCompostos}`);
}
jurosCompostos(100, 0.1, 2);
