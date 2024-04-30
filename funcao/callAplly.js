//Call e Apply

//São formas de chamar funções a partir de objetos.
//A diferença entre os dois está forma em que os parâmetros são passados.



function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

//EXEMPLO 01
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())


console.log(produto.getPreco())  //para chamar desta forma, a função getPreco precisa ser um atributo do objeto, como acima. Ou seja, neste caso, getPreco é um atributo do objeto "produto" que está sendo acessado.


//EXEMPLO 02
const carro = {
    preco: 49990, 
    desc: 0.20
}

//sem passar parâmetros, as duas formas (call e apply) ficam iguais. como abaixo.
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//tanto nas duas chamadas acima, como nas duas abaixo, parâmetro "carro" é apenas o contexto que seram executadas as funções "getPreco".


console.log(getPreco.call(carro, 0.17, '$'))  //com CALL, tanto o primeiro parâmetro (que é o contexto de execução da função) como os parâmetros da função propriamente ditos, são passados todos juntos, separados apenas por vírgulas.

console.log(getPreco.apply(carro, [0.17, '$'])) //com APPLY, é passado o contexto de execução primeiro assim como no CALL e, os parâmetros propriamente ditos são passados dentro de um ARRAY.


//ATENÇÃO
//Chamando a função com CALL E APPLY, não é necessário que tal função seja um atributo do objeto, como no exemplo 01.