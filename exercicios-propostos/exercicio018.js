//Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas. Crie uma função que receba um array de produtos e retorne o total das despesas.

function despesasTotais(despesas) {
    let soma =  0
    for(let i in despesas) {
        soma += despesas[i].preco
    }
    return soma
}

const itens = [
    {nome: 'TV à Cabo', categoria: 'Entretenimento', preco: 120.00},
    {nome: 'Telefone', categoria: 'Comunicação', preco: 59.00},
    {nome: 'Internet', categoria: 'Comunicação', preco: 99.00}
]

console.log(despesasTotais(itens))



