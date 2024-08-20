//36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

function multiplicacao2 (elemento, valorInteiro) {
    return elemento * valorInteiro
}

function multiplicacao1(vetor, valorInteiro) {
    let resultado = vetor.map(elemento => {
        if (elemento > 5) {
            return multiplicacao2(elemento, valorInteiro)
        } else {
            return elemento
        }
    });

    return resultado
}


const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const multiplicacaoValores = multiplicacao1(valores, 2)

console.log(multiplicacaoValores)