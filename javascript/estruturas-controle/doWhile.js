function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
let opcao = -1;  // A declaração dessa variável, no comando "do while" torna-se opcional, pois ele executará pelo menos uma vez.
// O comando "do while" executará pelo menos uma vez, mesmo que a condição seja atendida no início.
do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
} while(opcao != -1);
console.log("Até a próxima!");