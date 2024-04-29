//Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

function simboloMais(quantidade) {
    let simbolo = '+'
    for(let i = 1; i < quantidade; i++) {
        simbolo += '+'
    }
    return simbolo
}

console.log(simboloMais(5))