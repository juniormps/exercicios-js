//29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function intervalo(numeros) {
    let numerosIntervalo = 0

    for (let num of numeros) {
        if (num >= 10 && num <= 20) numerosIntervalo++
    }

    return `Exiem ${numerosIntervalo} no intervalo de [10, 20]`
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

console.log(intervalo(numbers))


//OU

function numIntervalo(numeros) {
    let numerosIntervalo = numeros.filter(num => (num >= 10 && num <= 20)).length
    
    return `Exiem ${numerosIntervalo} no intervalo de [10, 20]`
}

console.log(intervalo(numbers))