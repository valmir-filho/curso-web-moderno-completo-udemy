const saudacao = "Opa";  // Contexto léxico.
function exec() {
    const SAUDACAO = "Fala!";  // contexto léxico.
    return SAUDACAO;
}
const clientes = {  // Objetos são grupos aninhados de pares nome/valor.
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Qualquer",
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(clientes);