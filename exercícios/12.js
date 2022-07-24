/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, conforme descrito a seguir:
- Plano A: aumento de 10%;
- Plano B: aumento de 15%;
- Plano C: aumento de 20%. 
Faça uma função que leia o plano de trabalho e o salário atuais de um funcionário, calcule e imprima o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */
function novoSalario(planoTrabalho, salarioAtual) {
    switch(planoTrabalho) {
        case "A":
            let novoSalario10 = (salarioAtual * 1.1).toFixed(2);
            console.log(`Novo salário (com 10% de aumento): R$${novoSalario10}.`);
            break;
        case "B":
            let novoSalario15 = (salarioAtual * 1.15).toFixed(2);
            console.log(`Novo salário (com 15% de aumento): R$${novoSalario15}.`);
            break;
        case "C":
            let novoSalario20 = (salarioAtual * 1.2).toFixed(2);
            console.log(`Novo salário (com 20% de aumento): R$${novoSalario20}.`);
            break;
        default:
            console.log("Plano inválido!");
    }
}
novoSalario("A", 1000);
novoSalario("B", 1000);
novoSalario("C", 1000);
novoSalario("D", 1000);