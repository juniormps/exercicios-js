//Forma de executar um método agendado

//O método "scheduleJob" recebe como parâmetro uma string (a qual é a data e hora de agendamento) e uma callback (a qual é o método que se deseja executar no agendamento)

//Os parâmetros da string são respectivamente: segundo; minuto; hora; dia do mês; mês; dia da semana

//Obs.1: O dia da semana começa com "domingo = 0"
//Obs.2: quando for colocado "*" em vez de um número, será considerado qualquer segundo ou minuto ou dia, etc.
//Obs.3: O "*/" colocado na frente dos segundos irá fazer como que o método seja executado de 5 em 5 segundos (no caso do exemplo) ao invés de apenas no segundo 5.

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 7 * * 3', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds()) 
})


//Outra forma de utilizar um "timer" com o temporizador padrão do JavaScript, que é o "setTimeout"
//Abaixo, o "setTimeout" cancelará a "tarefa1" após 20 segundos que esta começar a ser executada.
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// Outros métodos de agendamento de tarefas nativos do JavaScript são: 
//"setImmediate" => equivale ao "setTimeout", porém sem precisar passar o parâmetro tempo.
//"setInterval" => executa uma função de tempos em tempos.


//Criando um agendamento a partir do objeto "RecurrenceRulle"
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 7
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})