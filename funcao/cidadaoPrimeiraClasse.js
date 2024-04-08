//Função em JS é First-Class Object (Citizens)
//Higher-order function (Função de Alta Ordem)

//Uma função é tratada como dado, ou seja, pode ser passada como parâmetro e pode conter outra função dentro dela

//Uma função sempre retorna algum valor. No caso em que não for declarado o "return", ela retornará o valor "undefined".



//CRIANDO UMA FUNÇÃO DE FORMA LITERAL
function fun1() { 

}



//CRIANDO UMA FUNÇÃO EM UMA VARIÁVEL(OU CONSTANTE)
const fun2 = function() {

}
//Neste caso, a função é uma função anônima, ou seja, que não possui nome.
//Se chamar a constante com os parênteses, desta forma "fun2()", ela INVOCARÁ a função.
//Pode também chamar a constante sem os parênteses, desta forma "fun2".



//CRIANDO UMA FUNÇÃO EM UM ARRAY
//No exemplo abaixo, além de ter sido crianda uma função de forma literal dentro do array, foram também armazenadas as outras duas funções já criadas anteriormente.
const array = [function (a, b) { return a + b}, fun1, fun2]

console.log(array[0](2, 3))  //chamando a função que foi criada no indice 0 do array



//CRIANDO UMA FUNÇÃO EM UM ATRIBUTO DE UM OBJETO
//No exemplo abaixo, foi criada uma função de forma dinâmica dentro de um objeto vazio.
const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())



//PASSAR FUNÇÃO COMO PARÂMETRO DE OUTRA FUNÇÃO
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })



//UMA FUNÇÃO PODE RETORNAR/CONTER OUTRA FUNÇÃO
function soma(a, b) {
    return function (c) {
        console.log(a + b +c)
    }
}

soma(2, 3) (4)
const cincoMais = soma(2, 3)
cincoMais(4)