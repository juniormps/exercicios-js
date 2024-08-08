/*
19) O cardápio de uma lanchonete é o seguinte:

Nº         Código                  Descrição do Produto                          Preço
1           100                      Cachorro Quente                             R$ 3,00
2           200                      Hambúrguer Simples                          R$ 4,00
3           300                      Cheeseburguer                               R$ 5,50
4           400                      Bauru                                       R$ 7,50
5           500                      Refrigerante                                R$ 3,50
6           600                      Suco                                        R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.
*/

function Produto(codigo, descricao, preco) {
    this.codigo = codigo
    this.descricao = descricao
    this.preco = preco
    this.getValorPedido = (quantidade) => quantidade * preco
}

const p1 = new Produto(100, "Cachorro Quente", 3)
const p2 = new Produto(200, "Hambúrguer Simples", 4)
const p3 = new Produto(300, "Cheeseburguer", 5.5)
const p4 = new Produto(400, "Bauru", 7.5)
const p5 = new Produto(500, "Refrigerante", 3.5)
const p6 = new Produto(600, "Suco", 2.8)

console.log(p2.getValorPedido(3))



