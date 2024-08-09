//Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multipicar(num1, num2) {
    resultado = 0
    if (num2 < 0) {
        num1 = - num1
        num2 = - num2
    }

    for (let i = 0; i < num2; i++) {
        resultado += num1
    }

    return resultado
}

console.log(multipicar(20, 5))