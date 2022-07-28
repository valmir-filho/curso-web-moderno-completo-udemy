let num1 = 1;
num1++;  // Incremento pós-fixado.
++num1;  // Incremento pré-fixado.
num1--;  // Decremento pós-fixado.
--num1;  // Decremento pré-fixado.
console.log(num1);
let num2 = 1;
let num3 = 2;
console.log(++num2 === num3--);
console.log(num2 == num3);