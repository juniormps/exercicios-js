//A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um arrayde strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function filtrarPalavra(stringPesquisada, array) {
    const palavrasEncontradas = []
    for (let palavra of array) {
        if (palavra.includes(stringPesquisada))
        palavrasEncontradas.push(palavra)
    }
    return palavrasEncontradas
}

const conjuntoPalavras = ['sim', 'simulação', 'prova', 'programação', 'simulado', 'programa']

console.log(filtrarPalavra('sim', conjuntoPalavras))
console.log(filtrarPalavra('gra', conjuntoPalavras))