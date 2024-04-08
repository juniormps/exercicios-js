//Como passar uma quantidade variável de PARÂMETROS para uma função

//Diferente de outras linguagens de programação, em JS é possível passar parâmetros para uma função vazia, como no exemplo abaixo.
//"ARGUMENTS" é um array interno que toda função possui, no qual estão armazenados seus parâmetros.
function soma() {
    let soma = 0
    for (i in arguments) {    
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))