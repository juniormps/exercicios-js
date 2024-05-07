//Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

function contarCaractere(caractere, string) {
    let contador = 0
    for (let letra of string) {
        if (letra === caractere) contador++
    }
    return console.log('O texto possui', contador, 'letras', caractere)
}

let texto = 'O rato roeu a roupa do rei de Roma.'
let letra = 'r'
contarCaractere(letra, texto)