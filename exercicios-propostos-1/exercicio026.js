//Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

function filtrarVogais(string) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    vogais.forEach(vogal => string = string.replace(vogal, ''))
    return string
}

console.log(filtrarVogais('Marcio Pereira'))

//O CÓDIGO ACIMA É FALHO, POIS ELE ELIMINA SOMENTE A PRIMEIRA OCORRÊNCIA DA VOGAL NA STRING.
//O MAIS CORRETO É UTILIZAR UMA EXPRESSÃO REGULAR, COMO ABAIXO:

function removerVogais(string) {
    const vogais = /[aeiouAEIOU]/g;
    return string.replace(vogais, '');
}

console.log(removerVogais('Marcio Pereira'))