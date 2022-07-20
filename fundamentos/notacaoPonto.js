console.log(Math.ceil(6.1));  // Comando que faz o arredondamento (para cima).
const OBJ1 = {};
OBJ1.nome = "Bola1";
// OBJ1["nome"] = "Bola2"; // Outra forma de criação.
console.log(OBJ1.nome);
function Obj(nome) {
   this.nome = nome;  // A palavra reservada "this" está tornando público o objeto criado.
}
const OBJ2 = new Obj("Cadeira");
const OBJ3 = new Obj("Mesa");
console.log(OBJ2.nome);
console.log(OBJ3.nome);