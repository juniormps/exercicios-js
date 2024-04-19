//FUNÇÕES ANÔNIMAS

//Como a própria nomenclatura já diz, são FUNÇÕES SEM NOME

const soma = function (x, y) {
    return x + y
}

console.log(soma(58, 4))

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)  //passando a função "soma" como parâmetro de forma literal
imprimirResultado(3, 4, function(x, y) {   //passando uma função anônima como parâmetro
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)  //passando uma função arrow (que é sempre uma função anônima) como parâmetro


const pessoa = {
    nome: function() {
        console.log('Márcio Junior')
    }
}

pessoa.nome()