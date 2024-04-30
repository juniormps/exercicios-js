//Criar uma função que receba um array de números e retorne o menor número desse array. 

function menorNumero(numeros) {
    let menorNum = Math.min(...numeros)
    return menorNum
}

const numeros = [1, 5, 9, 4, 2]

console.log(menorNumero(numeros))



//ou desta outra maneira abaixo:


function numeroMenor(numeros) {
    let menorNum = numeros[0]
    numeros.forEach(element => {
        element < menorNum ? menorNum = element : menorNum = menorNum
    })
    return menorNum
}

const numeros2 = [1, 5, 9, 4, 2]

console.log(numeroMenor(numeros2))