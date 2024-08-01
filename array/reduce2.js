//Desafios utilizando o método "reduce":

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]


//Desafio 1: todos os alunos são bolsistas? (true ou false)

const bolsas = alunos.map(elemento => elemento.bolsista)

const todosSaoBolsistas = bolsas.reduce((acumulador, atual) => acumulador && atual)

console.log(todosSaoBolsistas)
 

//Desafio 2: algum aluno é bolsista? (true ou false)

const existeBolsista = bolsas.reduce((acumulador, atual) => acumulador || atual)

console.log(existeBolsista)