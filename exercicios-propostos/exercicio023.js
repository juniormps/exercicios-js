//Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(string) {
    string = string.trim()
    let palavras = string.split(/\s+/)
    return palavras.length
}

const texto = "O rato roeu a oupa do rei de Roma."
console.log(texto)
console.log('A frase acima possui', contarPalavras(texto), 'palavras.')