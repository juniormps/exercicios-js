//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function resultadoOperacoes(num1, num2) {
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let divisao = num1 / num2

    return `soma = ${soma}; subtração = ${subtracao}; multiplicação = ${multiplicacao}; divisão = ${divisao}`
}

console.log(resultadoOperacoes(3, 6))