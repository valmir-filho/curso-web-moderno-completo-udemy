/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console:
“Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”.
Teste com estas três opções. Crie também um default, que retornará uma mensagem de erro no console. */
function nomeFruta(fruta) {
    switch(fruta) {
        case "maçã":
            console.log(`Não vendemos ${fruta} aqui.`);
            break;
        case "kiwi":
            console.log(`Estamos com escassez de ${fruta}.`);
            break;
        case "melancia":
            console.log(`Aqui está, são R$3,00 o quilo.`);
            break;
        default:
            console.log("Erro! Informe a fruta novamente.")
    }
}
nomeFruta("maçã");
nomeFruta("kiwi");
nomeFruta("melancia");
nomeFruta("pêra");
