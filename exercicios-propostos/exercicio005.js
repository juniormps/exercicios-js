//A função recebe dois números e retorna se o primeiro é maior ou igual ao segundo. Levando em conta o tipo.

/*
function maiorOuIgual(num1, num2) {
    if (num1 > num2 || num1 === num2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(8, '7'))
*/

function maiorOuIgual(num1, num2) {
    if (typeof num1 != typeof num2) return false

    return num1 >= num2
}

console.log(maiorOuIgual('5', '3'))

