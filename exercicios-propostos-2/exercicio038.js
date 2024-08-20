//38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imprimirImpares(inicio = 0, fim = 100) {
    let primeiroNum = 0
    let ultimoNum = 0

    if (inicio <= fim) {
        primeiroNum = inicio
        ultimoNum = fim
    } else if (inicio > fim) {
        primeiroNum = fim
        ultimoNum = inicio
    }

    const valresImpares = []

    for (let c = primeiroNum; c <= ultimoNum; c++) {
        if (c % 2 != 0)
            valresImpares.push(c)
    }

    return `Os valores impares no intervalo são: ${valresImpares.join(', ')}`        
}


const numerosImpares = imprimirImpares(8, 57)
console.log(numerosImpares)