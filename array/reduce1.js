//Método "reduce"

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))

//O método "reduce" deve receber dois parâmetros: o primeiro é a função de callback e o segundo é um valor no qual deve ser iniciado o acumulador da callback.

//A callback do método "reduce" pode receber quatro parâmetros, que são: o acumulador; o elemento; o índice do elemento; e o próprio array.

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)  //O zero aqui é o segundo parâmetro do método reduce. Este parâmetro é o valor que o acumulador da callback assumirá inicialmente. Neste aso do exemplo será zero.

console.log(resultado)




//PODERIA TAMBÉM SER FEITO DA MANEIRA ABAIXO:

const notas = alunos.map(a => a.nota)

const totalNotas = notas.reduce((acumulador, atual)=> acumulador + atual, 0)

console.log(totalNotas)

//Obs.: quando o segundo parâmetro do método (valor que o acumulador deverá iniciar) for zero, o mesmo não é obrigatório ser passado.