function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;  // Forma de trabalho com o "ou exclusivo (xor: ^)".
    const manterSaudavel = !comprarSorvete;
    // Forma de retorno de mais de uma variável (fazendo a criação de um objeto, sem a necessidade de informar chave/valor).
    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));