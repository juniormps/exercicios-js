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

const valores = [2, 44, 3, 8, 9, 15, 14, 10, 55, 11, 29, 16, 18]

console.log(numerosEindicesPares(valores))