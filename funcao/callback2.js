//FUNÇÃO CALLBACK - PARTE 2

//Exemplos de função com Callback e sem Callback

//-------------------------------------------------//

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem Callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)


//Com Callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)
//A função "filter" é uma função de Array, que é uma função que filtra os elementos de um array em cima de um determinado critério.
//Diferente da função "forEach", que traz o elemento e o índice do array para serem análisados, a função "filter" tráz apenas o elemento para ser analisado.
//Ou seja, se o elemento for menor que 7, a função anônima retornará um valor "verdadeiro" e consequentemente talelemento será filtrado para fazer parte do array "notasBaixas2".

//O exemplo acima, pode ser escrito com uma função arrow tbm.
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)


//Outro exemplo (agora colocando a arrow function em uma constante)
const notasMaioresQue7 = nota => nota > 7
const notasAltas = notas.filter(notasMaioresQue7)
console.log(notasAltas)