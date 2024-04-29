//Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(repetido, vezes) {
    const repeticao = []
    for(let i = 0; i < vezes; i++) {
        repeticao[i] = repetido
    }
    return repeticao
}

console.log(repetir('Junior', 3))