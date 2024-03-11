//Armazenando uma FUNÇÃO em uma variável ou constante
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
//Obs.: a função acima, que é atribuída à constante "imprimirSoma" é chamada de função anônima, pois não possui nome.



//Armazenando uma função Arrow (forma mais abreviada) em uma variável ou constante
const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 7))

//Obs.: a seta "=>" substitui a palavra "function"



//Retorno implícito
//Normalmente só é escrito desta forma quando a função tem apenas uma linha
const subtracao = (a, b) => a - b   
console.log(subtracao(2, 3))

