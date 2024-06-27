//Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

function filtrarNumeroDeDigitos(array, quantDigitosDesejada) {
    let arrayFiltrado = []
    for (let elemento of array) {
        const quantDigitos = String(elemento).length

        if (quantDigitos === quantDigitosDesejada)
            arrayFiltrado.push(elemento)
    }

    return arrayFiltrado
}

const numeros = [0, 58, 1, 15, 564, 23, 5, 7654, 10000, 69, 55236, 123]

console.log(filtrarNumeroDeDigitos(numeros, 5))



//OU PODE TAMBÉM SER FEITO DA MANEIRA ABAIXO:

function filtrarPorQuantidadeDeDigitos(array, quantidadeDesejada) {
    return array.filter(numero => {
        const quantidadeDeDigitos = String(numero).length
        
        return quantidadeDeDigitos === quantidadeDesejada
    })
}

const numeros2 = [0, 58, 1, 15, 564, 23, 5, 7654, 10000, 69, 55236, 123]

console.log(filtrarPorQuantidadeDeDigitos(numeros2, 2))