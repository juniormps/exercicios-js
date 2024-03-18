//Aula sobre o conceito de HOISTING

//HOISTING = içar / levar para cima

//Caso apareça uma variável no código sem ter sido declarada anteriormente, não será apresentado um ERRO no código, mas sim o valor UNDEFINED para a variável. Neste caso, houve o HOISTING da declaração que apareceu depois, ou seja, é como se a declaração da variável tivesse sido içada para o início.
//EXEMPLO
console.log('a =', a)
var a = 2
console.log('a =', a)


//Entretanto, vale atentar que para este içamento acontecer, a variável precisa ser declarada em algum momento no código, mesmo que seja depois, como no exemplo acima. Caso a mesma não seja declarada, como no exemplo abaixo, o código apresentará ERRO.
//EXEMPLO
console.log('b =', b)
console.log('b =', b)


//OBSERVE que o conceito de hoisting não funciona com LET
//EXEMPLO
console.log('c =', c)
let c = 2
console.log('c =', c)




