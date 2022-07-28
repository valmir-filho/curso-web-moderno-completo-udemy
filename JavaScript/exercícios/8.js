/* Crie um programa que exiba se um dia é útil, final de semana, ou inválido, dado o número referente. Considere que domingo é o dia 1 e sábado é o dia 7.
Utilize a estrutura Switch. */
function verificaDia(dia) {
    switch(dia) {
        case 1:
            console.log(`Dia ${dia}: Domingo é final de semana.`);
            break;
        case 2:
            console.log(`Dia ${dia}: Segunda-feira é dia útil.`);
            break;
        case 3:
            console.log(`Dia ${dia}: Terça-feira é dia útil.`);
            break;
        case 4:
            console.log(`Dia ${dia}: Quarta-feira é dia útil.`);
            break;
        case 5:
            console.log(`Dia ${dia}: Quinta-feira é dia útil.`);
            break;
        case 6:
            console.log(`Dia ${dia}: Sexta-feira é dia útil.`);
            break;
        case 7:
            console.log(`Dia ${dia}: Sábado é final de semana.`);
            break;
        default:
            console.log("Dia inválido!");
            break;
    }
}
verificaDia(1);
