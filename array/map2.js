//Desafio:
//Dado um array com elementos no formato JSON, retornar um array apenas com os preços.

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


//Retornando um array apenas com os preços:

const paraObjeto = elemento => JSON.parse(elemento)  //Transforma os elementos (que são JSON) em objetos.

const precos = produto => produto.preco  //Aqui está sendo acessado o valor do atributo "preco" em cada produto (que agora são objetos)

const resultado = carrinho.map(paraObjeto).map(precos)
console.log(resultado)



//PODERIA TAMBÉM SER FEITO DA MANEIRA ABAIXO:
const paraObjeto2 = carrinho.map(elemento => JSON.parse(elemento))

const precos2 = paraObjeto2.map(produto => produto.preco)

console.log(precos2)


