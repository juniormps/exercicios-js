//O método "Map" faz uma cópia de um array para que esta seja manipulada, fazendo com que o array original se mantenha sem transformações.

const nums = [1, 2, 3, 4, 5]

// Aqui foi atribuído à uma variável, o novo array gerado pelo método "map" a partir do array "nums".
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

//Obs.: assim como o "foreach", o "map" tbm pode receber três parâmetros na função de callback, que são: o elemento, o índice e o próprio array.


//As callbacks podem ser armazenadas em constantes para serem utilizadas posteriormente.
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //Aqui o retorno será uma string

//O "map" pode ser utilizado de forma encadeada como abaixo.
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)