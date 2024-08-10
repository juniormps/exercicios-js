//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorEmenor(numeros) {
    let maiorNumero = Math.max(...numeros)
    let menorNumero = Math.min(...numeros)

    return `O maior número do vetor é ${maiorNumero} e o menor número  é ${menorNumero}`
}

const numbers = [58, 4, 63, 10, 87, 18]

console.log(maiorEmenor(numbers))