//Aula sobre declaração de variável utilizando LET

//Utilizando LET, a variável possui escopo apenas dentro do bloco em que foi declarada.

//EXEMPLO 1
let numero = 1
{
    let numero = 2
    console.log('dentro do bloco =', numero)
}
console.log('fora do bloco =', numero)


//EXEMPLO 2
let numero1 = 1
{
    let numero2 = 2
    console.log('dentro do bloco =', numero1, 'e', numero2, 'são visíveis')
}
console.log('fora do bloco, somente', numero1, 'é visível')