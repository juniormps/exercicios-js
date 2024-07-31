//Algumas coisas que podem ser feitas com "herança"

//Os três elementos abaixo são funções
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Logo, têm prototype

//Aqui foi adicionado o método "reverse" como atributo do prototype da função "String" 
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
//O "this" pega a string em questão
//O método "split" transforma a string em um array em que cada letra da string é um elemento do array.
//O método "reverse" é um método que inverte arrays.
//O método "join" junto os elementos de novo em uma string.

console.log('Escola Cod3r'.reverse())


//Aqui foi adicionado o método "first" como atributo do prototype da função "Array"
Array.prototype.first = function() {
    return this[0]
}
// retornará o primeiro elemento de um array

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())


