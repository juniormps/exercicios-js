//Conceito de ATRIBUIÇÃO POR REFERÊNCIA e ATRIBUIÇÃO POR VALOR

const a = {name: 'teste'}

console.log(a)

const b = a  //Por se tratar o valor de "a" ser um objeto, foi feita uma atribuição por REFERÊNCIA, ou seja, a constante "b" passou a apontar para o mesmo endereço de memória que "a" aponta. Sendo assim, o valor contido neste endereço pode ser alterado tanto por "a" como por "b", como pode ser visto no exemplo abaixo. Quando o valor atribuído é um objeto ou função, a atribuição é por REFERÊNCIA.

b.name = 'Opa'

console.log(a)


//----------------------

let c = 3

let d = c  //Aqui neste caso, por se tratar do valor de "c" ser um tipo PRIMITIVO (number), foi feita uma atribuição por VALOR. Que no caso, foi entregue uma cópia do valor de "c" para "d". Se "d" for alterado, "c" não sofrerá mudança. 
d++
console.log(c)
console.log(d)


//Conceito de NULL e UNDEFINED

let valor  //a variável foi declarada mas não foi INICIALIZADA
console.log(valor)  //Como a variável não foi inicializada, ou seja, não foi atribuído um valor a ela, o valor dela passa a ser UNDEFINED. O qual é atribuído pelo próprio JavaScript.


valor = null  //Aqui a variável foi inicializada e atribuído o valor "NULL" para ela. Tal valor não aponta para nenhum local de memória. Note, que diferentemente do undefined, quem atribuiu o valor NULL foi o programador.
console.log(valor)





