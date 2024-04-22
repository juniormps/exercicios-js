//MAIS EXEMPLOS DE FUNÇÃO FACTORY

//EXEMPLO 01
function criarProduto(nomeProd, precoProd) {
    return {
        produto: nomeProd,
        preco: precoProd
    }
}

console.log(criarProduto('Bola de Futebol', 98.99))
console.log(criarProduto('Carrinho', 5.60))


//EXEMPLO 02
function criarProduto2(nomeProd, precoProd) {
    return {
        nomeProd,
        precoProd,
        desconto: 0.1
    }
}

console.log(criarProduto2('Notebook', 1950.99))