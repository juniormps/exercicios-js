//26) Fazer um programa para encontrar todos os pares entre 1 e 100

function exibirNumerosPares() {
    let numero = 1
    let numerosImpressos = ""

    while (numero <= 100) {
        if (numero % 2 == 0) {
            numerosImpressos += `${numero}\n`
        }
        numero++
    }

    return numerosImpressos
}

console.log(exibirNumerosPares())