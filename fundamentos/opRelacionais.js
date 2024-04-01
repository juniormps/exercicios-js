//Operadores Relacionais em JS

//Os operadores "==" e "!=" não levam em conta o TIPO, apenas o VALOR.
//Os operadores  "===" e "!==" levam em conta o TIPO, e o VALOR.

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)


//OUTROS OPERADORES RELACIONAIS

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

//OUTROS EXEMPLOS
const d1 = new Date(0)
const d2 = new Date(0)

//Neste caso e no abaixo, o valor para a igualdade será FALSO nos dois, pois o que está se comparando são ENDEREÇOS de memória
console.log('09)', d1 === d2)  
console.log('10)', d1 == d2)

//Já nos dois casos abaixo, o valor será VERDADEIRO, pois o que se compara são os valores inseridos nas constantes d1 e d2
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime())


//OUTROS EXEMPLOS
console.log('13)', undefined === null)  //Aqui será FALSO, pois leva em consideração os tipos
console.log('14)', undefined == null)  //Enquanto aqui será VERDADEIRO, pois não leva em consideração os tipos


