//Estrutura de Controle - "FOR / IN"
//uma forma abreviada de percorrer arrays e objetos

//EXEMPLO 01 (com Array)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log('nota ', i, ' = ', notas[i])
}


//EXEMPLO 02 (com Objeto)
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(atributo, '=', pessoa[atributo])
}