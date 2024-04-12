//Estabelecendo um PARÂMETRO PADRÃO para os parâmetros da função.

//Isto é útil para caso seja passado como parâmetro, valores como "undefined" ou "null"

//EXEMPLO 01
//Estratégia de utilizar valor 1 como padrão
//Neste exemplo, caso os parâmetros recebidos não tenham valores válidos, os mesmos assumirão o valor 1.
//Consequentemente, as variáveis que os recebem, também assumirão o valor 1.
function soma1(a, b, c) {
    a = a || 1  //Lê-se: "a" recebe "a" ou 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
//ATENÇÃO: caso seja passado o valor "0", o mesmo será entendido como FALSO e o parâmetro assumirá o valor padrão estabelecido, que no caso do exemplo é 1.


//EXEMPLO 02
//Serão utilizadas três estratégias de VALOR PADRÃO neste exemplo
function soma2(a, b, c) {
    a  = a !== undefined ? a : 1  //Lê-se: se parâmetro "a" !== undefined, então variável "a" recebe "a", senão, recebe 1.

    b = 1 in arguments ? b : 1  //Lê-se: existe algum valor para o índice 1 do array "arguments"? se sim, então (b = b), senão, (b = 1).

    c = isNaN(c) ? 1 : c  //Lê-se: o valor passado para o parâmetro "c" é NaN? se sim, então (c = 1), senão, (c = c)

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Obs.1: no caso da função acima, como se trata de uma operação numérica, o método mais indicado é o feito com a variável "c".

//Obs.2: Com relação ao método utilizado com o parâmetro "b": caso fosse o parâmetro "a", seria o índice "0"; caso fosse o parâmetro "c", seria o índice "2"; e assim por diante.


//EXEMPLO 03
//Método mais moderno do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))