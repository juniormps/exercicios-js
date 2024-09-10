console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

//Não é possível reatribuir o valor de "exports". Apenas utilizando o "module.exports"
exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

//Para setar um novo valor para "exports" é preciso utilizar o "module.exports"
module.exports = { publico: true }