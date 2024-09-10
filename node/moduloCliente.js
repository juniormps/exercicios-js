//Cmo IMPORTAR módulos de outros arquivos

//Utilizando o método "require"
//Como o "moduloA" e o "muduloB" estão na mesma pasta que este arquivo que eá fazendo a requizição, coloca-se "./" na frente.
const moduloA = require('./moduloA')  
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)