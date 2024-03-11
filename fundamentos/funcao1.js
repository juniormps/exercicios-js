//Exemplo de FUNÇÃO #1

//FUNÇÃO SEM RETORNO
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)  //serão passados os parâmetros 2 e 3 para "a" e "b" respectivamente.

imprimirSoma(2)  //Neste caso, o parâmetro de "b" será "undefined" e o resultado de "a + b" será NaN (Not a Number)

imprimirSoma(2, 10, 4, 6, 7, 9)  //Neste caso, ele irá passar somente o 2 e o 10 como parâmetros e ignorará o restante.

imprimirSoma()  //Neste caso, como não há parâmetro nenhum para passar, o resultado será NaN.


//FUNÇÃO COM RETORNO

//Neste caso, o valor atribuído a "b" será ZERO, caso não seja passado parâmetro nenhum para o mesmo.
function soma(a, b = 0) {  
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) //Neste caso o resultado será NaN


