// ES8: Object.values/Object.entries
//Object.values => retorna um array com os valores de um objeto
//Object.entries => retorna um array de arrays. Onde cada subarray é uma propriedade do objeto e seu respectivo valor.
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal de Objetos
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
       return 'Oi gente!' 
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())