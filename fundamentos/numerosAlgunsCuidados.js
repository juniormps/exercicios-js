//Alguns cuidados a mais com o tipo number

console.log(7 / 0)  //Apresentará o resultado INFINITY
console.log("10" / 2)  //mesmo o 10, neste caso, sendo uma string, o JS irá convertê-lo para number e efetuar a operação.
console.log("Show!" * 2)  //Apresentará o resultado NaN
console.log(0.1 + 0.7)  //O JS apresenta imprecisão neste tipo de conta
console.log((10.345).toFixed(2))  //É possível chamar uma função diretamente de um número, sem ter que armazená-lo em uma variável. Porém, o mesmo precisa estar entre parênteses, como no exemplo.
//console.log(10.toString())  //Com o número fora de parênteses, não é possível chamar funções.