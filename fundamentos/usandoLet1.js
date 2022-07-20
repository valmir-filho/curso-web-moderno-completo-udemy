// Variáveis criadas com "let", aceitam os escopos local (de função e de bloco) e global.
let numero = 1;
{
    let numero = 2;
    console.log("dentro =", numero);
}
console.log("fora =", numero);