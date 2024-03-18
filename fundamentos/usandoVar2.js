//Aula 2 sobre declaração de variável com "VAR"

//Mais um exemplo de declaração de variável com escopo GLOBAL, declarada com "var"
var numero = 1
{
    var numero = 2
    console.log('dentro do bloco = ', numero)
}
console.log('fora do bloco = ', numero)