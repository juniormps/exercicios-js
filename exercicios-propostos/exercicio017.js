//Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. 

function somarNumeros(array) {
    let soma = 0
    for(i in array) {
        soma += array[i]
    }
    return soma
}

const valores = [2, 4, 5, 1, 36, 10]

console.log(somarNumeros(valores))