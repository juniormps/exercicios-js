//Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.

function calcularMedia(numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / numeros.length
}

const numeros = [1, 6, 8, 14, 36, 5, 10, 150]

console.log(calcularMedia(numeros))


//TAMBÉM PODERIA SER FEITO DESTA FORMA:
/*
function calcularMedia(numeros) {
    let soma = 0
    for (let elemento of numeros) soma += elemento
    return soma / numeros.length
}

const numeros = [1, 6, 8, 14, 36, 5, 10, 150]

console.log(calcularMedia(numeros))
*/



//OU ASSIM:
/*
function calcularMedia(numeros) {
    let soma = 0
    numeros.forEach(elemento => soma += elemento)
    return soma / numeros.length
}

const numeros = [1, 6, 8, 14, 36, 5, 10, 150]

console.log(calcularMedia(numeros))
*/
