//Evitando Modificações


//Object.preventExtensions -> impede que seja adicionados novos atributos em um objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

//O método "isExtensible" testa se o objeto é extensível ou não. No caso abaixo será "false".
console.log(Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'  //este atributo não será adicionado
delete produto.tag
console.log(produto)


//Object.seal -> impede que seja adicionado novos atributos e excluídos atributos existentes em um objeto.
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)

//O método "isSealed" testa se o objeto está selado. No caso abaixo, o retorno será "true"
console.log(Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'  //não será permitido adicionar este novo atributo ao objeto
delete pessoa.nome  //não será permitido deletar este atributo do objeto
pessoa.idade = 29
console.log(pessoa)


//Object.freeze -> além de não permitir a adição e a exclusão de atributos em um objeto, este método tbm não permite a alteração de valores de atributos.
