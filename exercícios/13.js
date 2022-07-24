/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva "Número
fora do intervalo." */
function numeroPorExtenso(numero) {
    switch(numero) {
        case 0:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: zero.");
            break;
        case 1:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: um.");
            break;
        case 2:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: dois.");
            break;
        case 3:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: três.");
            break;
        case 4:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: quatro.");
            break;
        case 5:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: cinco.");
            break; 
        case 6:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: seis.");
            break;
        case 7:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: sete.");
            break;
        case 8:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: oito.");
            break;
        case 9:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: nove.");
            break;
        case 10:
            console.log(`Número digitado: ${numero}.`);
            console.log("Número por extenso: dez.");
            break;
        default:
            console.log("Número fora do intervalo.")
    }
}
numeroPorExtenso(0);
numeroPorExtenso(1);
numeroPorExtenso(2);
numeroPorExtenso(3);
numeroPorExtenso(4);
numeroPorExtenso(5);
numeroPorExtenso(6);
numeroPorExtenso(7);
numeroPorExtenso(8);
numeroPorExtenso(9);
numeroPorExtenso(10);
numeroPorExtenso(11);
