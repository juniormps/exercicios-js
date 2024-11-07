//Exemplo de strings

const escola = "Cod3r"

console.log(escola.charAt(3))  //A função "charAt" mostra o caracter pedido da string selecionada.
console.log(escola.charAt(5))  //Caso não haja nenhum caracter relacionado ao número pedido, como ao lado, o programa não retornará nenhum valor.

console.log(escola.charCodeAt(2))  //A função "charCodeAt" retorna o valor UNICODE do caracter selecionado.

console.log(escola.indexOf("d"))  //A função "indesOf" retorna o o índice do valor pedido. Observe que por ser um caracter, o valor perguntado tem que está entre aspas (simples ou dupla)

console.log(escola.substring(1)) //Desta forma, a função "substring" retorna a string pedida a partir do indice pedido (inclusive)

console.log(escola.substring(0, 3))  //Desta forma, a função "substring" retorna a string entre os indices pedidos, com o primeiro INCLUÍDO e o segundo EXCLUÍDO


//As três sentenças abaixo fazem a mesma coisa de formas diferentes
console.log('Escola '.concat(escola).concat("!"))
console.log("Escola " + escola + "!")
console.log(`Escola ${escola}!`)  //Esta forma se chama "TEMPLATE STRINGS"


console.log(escola.replace(3, 'e'))  //A função "replace" substitui o caracter do indice selecionado pelo novo caracter informado.

console.log("Ana,Maria,Pedro".split(','))  //A função "split" transforma uma string em um Array. A vírgula entre os parênteses é onde se deseja que seja feita a divisão.


const str = ""
console.log(parseFloat(str).toString())