const SAUDACAO = "Opa";  // Contexto léxico.
function exec() {
    const SAUDACAO = "Fala!";  // contexto léxico.
    return SAUDACAO;
}
const CLIENTES = {  // Objetos são grupos aninhados de pares nome/valor.
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Qualquer",
        numero: 123
    }
}
console.log(SAUDACAO);
console.log(exec());
console.log(CLIENTES);