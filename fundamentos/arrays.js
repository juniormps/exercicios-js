const valores = [3.5, 4.2, 5.3, 7.4]  //Isto é um ARRAY declarado de forma literal.

console.log(valores[0])  //Os valores dentro das chaves são os índices do array 
console.log(valores[2])
console.log[valores[4]]  //Neste caso, não existe índice [4], portanto, o mesmo é UNDEFINED

valores[4] = 10.5  //Aqui foi criado o índice 4 e inserido o valor '10.5' no mesmo.
console.log(valores)

console.log(valores.length)  //A FUNÇÃO "LENGTH" retorna a quantidade de elementos em um array.


//A FUNÇÃO "PUSH" adiciona novos elementos no array. Os elementos novos vão sendo adicionados na última posição.
valores.push({id: 3}, false, null, 'teste')  
console.log(valores)


//DICA: NÃO MISTURAR TIPOS DE DADOS DIFERENTES DENTRO DE UM ARRAY. UMA BOA PRÁTICA É CRIAR ARRAYS PARA TIPOS HOMOGÊNEOS.



console.log(valores.pop())  //A FUNÇÃO "POP" retorna o valor da última posição do array e ao mesmo tempo a elimina.
console.log(valores)

delete valores[0]  //Esta é outra forma de DELETAR um elemento de um array.No caso, foi deletado o elemento do índice [0]
console.log(valores)


console.log(typeof valores)  //Em JAVASCRIPT, um ARRAY é do tipo OBJETO.






