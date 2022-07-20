// O JavaScript faz o "hoisting (elevação)" das variáveis, quando declaradas com "var".
console.log("a =", a);
var a = 2;
console.log("a =", a);
// O JavaScript não faz o "hoisting (elevação)" das variáveis, quando declaradas com "let".
// console.log("b =", b);  // Será gerado um erro.
let b = 2;
console.log("b =", b);