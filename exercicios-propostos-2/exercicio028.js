//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function paresEimpares(numeros) {
    let quantPares = numeros.filter(num => num % 2 == 0).length
    let quantImpares = numeros.filter(num => num % 2 != 0).length

    return `Existem ${quantPares} números páres e ${quantImpares} números ímpares.`
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

console.log(paresEimpares(numbers))