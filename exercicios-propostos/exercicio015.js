//Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

function numerosEindicesPares(array) {
    const resultado = []
    for(let i in array) {
        if (i % 2 == 0 && array[i] % 2 == 0) {
            resultado.push(array[i])
        }
    }
    return resultado
}

const valores1 = [2, 44, 3, 8, 9, 15, 14, 10, 55, 11, 29, 16, 18]
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const valores3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numerosEindicesPares(valores1))