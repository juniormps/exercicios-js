//Por que é possível alterar objetos que foram atribuídos à "constantes"?


//a CONSTANTE, na verdade, não aponta para um dado, mas sim para um endereço de memória.
//pessoa -> 123 -> {...}
const pessoa = { nome: 'Junior' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//se tentar fazê-la apontar para outro endereço, ela não apontará, como abaixo.
//pessoa -> 456 -> {...}
//pessoa -> { nome: 'Ana' }


//Caso deseje fazer com que o OBJETO seja imodificável, pode-se utilizar o método "freeze" de Object.
Object.freeze(pessoa)

//Com o método "freeze" o objeto fica congelado, não sendo possível modificar, adicionar ou deletar atributos, como abaixo.
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua Modesto Brocos'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//Caso deseje já criar um objeto constante, ou seja, que não possa ser modificado, pode-se fazer como abaixo.
const pessoaConstante = Object.freeze({nome: 'Alda'})
pessoaConstante.nome = 'Samuel'
console.log(pessoaConstante)