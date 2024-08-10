//25) Escrever um programa para exibir os números de 1 até 50 na tela.

function exibirNumeros() {
    let numero = 1
    let numerosImpressos = ""

    while (numero <= 50) {
        numerosImpressos += `${numero}\n`
        numero++
    }

    return numerosImpressos
}

console.log(exibirNumeros())