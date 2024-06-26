// Aula sobre tipos numéricos

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  //limita em duas casas decimais depois da virgula
console.log(media.toString(2))  //Transforma em binário
console.log(typeof media)  //Aqui o tipo é um number
console.log(typeof Number)  //Number com letra maiúscula é uma FUNÇÃO