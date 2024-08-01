//O método "filter" serve para filtrar elementos de um array e alocar estes elementos filtrados em um novo array.

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

//Assim como no "map" e o "foreach", a callback do "filter" também pode receber 3 parâmetros, que são: o elemento, o índice e o prórpio array.

console.log(produtos.filter(function(p) {
    return false  //retornará um array vazio
}))

console.log(produtos.filter(function(p) {
    return p.preco > 2500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))