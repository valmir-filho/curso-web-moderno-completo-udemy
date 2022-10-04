const schedule = require("node-schedule");
const tarefa1 = schedule.scheduleJob("*/5 * 13 * * 3", function() {  // Criação de uma tarefa temporizada.
    console.log("Executando a tarefa 1.", new Date().getSeconds());  // "getSeconds()" fará a apresentação dos segundos.
}); 
 /* Sintaxe do agendamento da tarefa (uma String):
 1) /5: definição da execução no segundo 5 de cada minuto. Para a execução a cada 5 segundos, basta colocar um "*" em frente a barra;
 2) Primeiro *: definição do minuto a ser executada a tarefa (qualquer minuto);
 3) 13: definição da hora a ser executada a tarefa;
 4) Segundo *: definição do dia do mês a ser executada a tarefa (qualquer dia);
 5) Terceiro *: definição do mês a ser executada a tarefa (qualquer mês);
 6) 3: definição do dia da semana a ser executada a tarefa (0-domnigo, 1-segunda, 2-terça, ...). */
 setTimeout(function() {  // Temporizador padrão do JavaScript.
    tarefa1.cancel();  // Função para fazer o cancelamento da "schedule".
    console.log("Cancelando a tarefa 1.")
 }, 20000)  // Cancelamento após 20 segundos.
 const regra = new schedule.RecurrenceRule();  // Regra de recorrência.
regra.dayOfWeek = [new schedule.Range(1, 5)];  // Execução do "range": de segunda-feira(1) à sexta-feira(5).
regra.hour = 13;  // Execução às 13 horas.
regra.second = 30;  // Execução no segundo 30.
const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log("Executando a tarefa 2.", new Date().getSeconds());
})