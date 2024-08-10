//24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function olaMundo() {
    let repeticoes = 0
    let resultado = ""
    while (repeticoes < 11) {
        resultado += "Hello Word!\n"
        repeticoes++
    }

    return resultado
}

console.log(olaMundo())