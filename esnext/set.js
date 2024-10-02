//A estrutura "Set" é uma estrutura não indexada e que não aceita repetições de valores.

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)  //retorna o tamanho do "Set"
console.log(times.has('vasco'))  //retorna verdadeiro ou falso se o elemento está contido dentro de um "Set"
console.log(times.has('Vasco'))
times.delete('Flamengo')  //exclui um elemento de dentro de um "Set"
console.log(times.has('Flamengo'))


//Instanciando um "Set" a partir de um array
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)