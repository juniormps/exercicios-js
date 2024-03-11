//Aula de tipos BOOLEANOS

let isAtivo = false  //FALSE ou TRUE são a forma literal de declarar valore booleanos.
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Outras formas de exprimir valores booleanos em JavaScript
//Os dois pontos de exclamação juntos "!!" significam "NÃO NÃO", ou seja, a negação de uma negação.

//Valores Verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //string com espaço (não é vazia)
console.log(!!'texto')  //string preenchida
console.log(!![])  //Array
console.log(!!{})  //Objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))


//Valores Falsos
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))



console.log(!!('' || null || 0 || ' '))  //Neste caso, será impresso o primeiro valor verdadeiro.

let nome = 'Lucas'
console.log(!!nome || 'Desconhecido')  //Também neste caso, irá imprimir o primeiro valor verdadeiro.

