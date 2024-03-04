//Aula de TEMPLATE STRINGS
//Template Strings é a forma mais moderna de concatenar strings e expressões

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + ' !'
const template = `
    Olá
    ${nome}`
console.log(concatenacao, template)  //O template strings suporta quebras de linha, recuos e espaços em branco.

console.log(`1 + 1 = ${1 + 1}`)  //O template strings tbm suporta expressões

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)  //Exemplo de uma função Arrow para mostrar que o template strings tbm suporta funções