//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritmetica(numeros) {

    //Validação para saber se o vetor está vazio
    if (numeros.length === 0) {
        return "O vetor está vazio. Não é possível calcular a média.";
    }
    
    let somaValores = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    let media = somaValores / numeros.length
    
    return `A média aritmética dos números do vetor é igual a ${media.toFixed(2)}`
}

const numbers = [58, 4,-25, 63, 10, -15,  87, 18, -1, -6]

console.log(mediaAritmetica(numbers))