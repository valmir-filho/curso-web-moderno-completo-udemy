/* Os triângulos podem ser classificados em 3 tipos, quanto ao tamanho de seus lados:
- Equilátero: Três lados iguais. 
- Isósceles: Dois lados iguais.
- Escaleno: Todos os lados diferentes.
Crie uma função que receba o valor dos três lados de um triângulo e retorne sua classificação. (abstraia as condições matemáticas de existência de um
triângulo). */
function vericaTriangulo(a, b, c) {
    if(a == b && b == c) {
        console.log("Triângulo Equilátero");
    } else if(a == b || a == c || b == c) {
        console.log("Triângulo Isóceles");
    } else {
        console.log("Triângulo Escaleno");
    }
}
vericaTriangulo(2, 2, 2);
vericaTriangulo(2, 2, 3);
vericaTriangulo(2, 3, 2);
vericaTriangulo(3, 2, 2);
vericaTriangulo(1, 2, 3);
