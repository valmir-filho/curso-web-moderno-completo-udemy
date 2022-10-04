const contadorA = require("./instanciaUnica.js");
const contadorB = require("./instanciaUnica.js");
const contadorC = require("./instanciaNova.js")();  // Os "()" fazem a invocação da função "factory".
const contadorD = require("./instanciaNova.js")();
contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);