//Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior(array) {
    let maior = 0
    let resultado = 0
    for (let num of array) {
        if (num > maior) { 
            maior = num
        }

        if(num > resultado && num < maior) {
            resultado = num
        }
    }
    return resultado
}

const numeros = [0, 5, 6, 10, 8, 4, 9]

console.log(segundoMaior(numeros))



//PODERIA SER FEITO COMO ABAIXO TAMBÉM:

function segundoMaiorNum(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    return segundoMaior
}

const numeros2 = [0, 5, 6, 10, 8, 4, 9, 15]

console.log(segundoMaiorNum(numeros2))