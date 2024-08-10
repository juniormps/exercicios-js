//31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function numNegativos(numeros) {
    let numerosNegativos = numeros.filter(num => num < 0).length
    
    return `Exiem ${numerosNegativos} números negativos no vetor.`
}

const numbers = [58, 4,-25, 63, 10, -15,  87, 18, -1, -6]

console.log(numNegativos(numbers))