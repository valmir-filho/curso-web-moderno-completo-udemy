const pessoa = {  // Criação do objeto pessoa.
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}
// O operador "destructuring" desestrutura os dados (retira do objeto os dados passados como parâmetro).
const {nome, idade} = pessoa;  // {}: representação do operador "destructuring".
console.log(nome, idade);
const {nome: n, idade: i} = pessoa;  // Alteração do nome das variáveis "nome" e "idade", para "n" e "i" respectivamente.
console.log(n, i);
const {endereco: {logradouro, numero}} = pessoa;
console.log(logradouro, numero);