

//ARRAYS

//Em javascript, o typeof de array é "Object"


//Abaixo foi testado o typeof da função Array, de uma função Array instanciada (ou seja, a criação de um array a partir da função) e de um array criado de forma literal.
console.log(typeof Array, typeof new Array, typeof [])

//Embora em javascript seja aceito diferentes tipos de dados dentro de um array, é BOA PRÁTICA utilizar apenas um mesmo tipo de dado dentro do mesmo.

//Aqui foi criado um array instanciando a função "Array" (Obs.: esta não é a forma mais indicada de criar arrays. A forma mais indica é a maneira literal.)
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])  //Undefined


//Formas de adicionar um novo elemento em um array
aprovados[3] = 'Paulo'  //Esta forma é mais utilizada para substituir um elemento já existente
aprovados.push('Abia')  //Esta é a forma mais comum

//O método "length" retorna o tamanho do array
console.log(aprovados.length)


//Abaixo, os elementos 5, 6, 7 e 8, serão Undefined.
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)


//O método "sort" ordena o array, colocando elementos undefined por último. (Obs.: este método não cria uma cópia do array e sim o ALTERA)
aprovados.sort()
console.log(aprovados)


//Um elemento de um array pode ser deletado utilizando o operador "delete". Quando isto é feito, o array não é reordenado, todos os elementos continuam com seus mesmos índices. Mas o valor do índice do elemento deletado passa a ser Undefined. 
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])


//O método "splice" serve também para adicionar elementos em um índice ou remover elementos ou adicionar e remover elementos ao mesmo tempo.
aprovados = ['Bia', 'Carlos', 'Ana']

//Aqui será REMOVIDO um elemento a partir do índice 1
aprovados.splice(1, 1) //O primeiro parâmetro é a partir de qual índice deve-se começar a ação (INCLUSIVE); o segundo é a quantidade de elementos a ser removida.
console.log(aprovados)

//Aqui será removido um elemento e adicionado dois
aprovados.splice(1, 1, 'elemento1','elemento2')
console.log(aprovados)

//Aqui não será removido nenhum elemento e adicionado mais um
aprovados.splice(2, 0, 'elemento3')
console.log(aprovados)


/*

//historico.innerHTML = historico.innerHTML.slice(0, - (tamanhoUltimoNumOriginal - 1)) + ultimoNumero

let historico = "520+23.5000"

const str1 = "23.5000"

const tamanhoStr1 = str1.length

const float1 = parseFloat(str1).toString()

historico = historico.slice(0 , - tamanhoStr1) + float1

console.log(historico)

*/







/*
const int1 = parseInt(str1)
console.log(int1)

const float1 = parseFloat(str1).toString()
console.log(float1)

console.log(typeof float1)
*/