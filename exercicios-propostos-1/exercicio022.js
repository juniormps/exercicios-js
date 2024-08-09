//Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o Х". Se não for igual, retorne "Que pena! O número sorteado foi o Х". Х é o número que foi sorteado.

function sorteioNumero(numEscolhido) {
    let numSorteado = Math.floor(Math.random() * 10) + 1
    if (numEscolhido == numSorteado) {
        return console.log('Parabés! O número sorteado foi o ' + numSorteado)
    } else {
        return console.log('Que pena! O número sorteado foi o ' + numSorteado)
    }
}

sorteioNumero(8)