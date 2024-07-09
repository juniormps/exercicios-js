//Funções Importantes dentro de OBJECT

//Object é uma função que contém outras funções destinadas a manipular objetos.


const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}


//Object.Keys => pega todas as chaves do objeto
console.log(Object.keys(pessoa))

//Object.values => pega todos os valores de um objeto
console.log(Object.values(pessoa))

//Object.entries => retorna um array de arrays, onde o array principal é o objeto e os subarrays são arrays com os pares chave/valor do objeto.
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {   //Aqui está sendo utilizado o elemento DESTRUCTURING "[]"
    console.log(`${chave}: ${valor}`)
})

//Object.defineProperty => cria atributos em um objeto e define as propridades que este atributo terá, como por exemplo: não ser enumerado pelo método "keys" ou se modificada.
Object.defineProperty(pessoa,'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2024'
})

pessoa.dataNascimento = '01/01/1980'  //o atributo não aceitará esta modificação e continuará com o valor inicial
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))  //também não será listada pelo método "keys"

//Object.assign (ECMAScript 2015 - ES6) => faz a união de vários objetos em um único objeto, chamado objeto de destino.
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //O primeiro objeto listado será o de destino

console.log(obj)  //Obs.: se um objeto já existir e for listado novamente, ele será sobreescrito por este último, como o "a" no exemplo.

//Object.freeze => este método congela o objeto, não permitindo alterações.
Object.freeze(obj)
obj.c = 8  //esta alteração no atributo "c" não será permitida pelo método "freeze" utilizado.
console.log(obj)



