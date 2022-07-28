console.log(Math.ceil(6.1));  // Comando que faz o arredondamento (para cima).
const obj1 = {};
obj1.nome = "Bola1";
// obj1["nome"] = "Bola2"; // Outra forma de criação.
console.log(obj1.nome);
class Obj {
   constructor(nome) {
      this.nome = nome; // A palavra reservada "this" está tornando público o objeto criado.
   }
}
const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);