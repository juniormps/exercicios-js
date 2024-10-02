// operador "..." rest(juntar)/spread(espalhar)

// usaando rest com parâmetro de função:
//ele junta vários parâmetros passados em um array. No caso do exemplo abaixo, o array "numeros"
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

// usando spread com objeto:
//No exemplo abaixo, todos os atributos do objeto "funcionario" e seus respectivos valores foram copiados para o objeto "clone"
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usando spread com array:
//No exemplo abaixo, todos os elementos do array "grupoA" foram copiados para o array "grupoFinal"
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)