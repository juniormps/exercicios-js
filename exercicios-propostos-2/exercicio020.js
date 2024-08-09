//20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function cedulasMonetarias(quantia) {
    let notas100 = Math.trunc(quantia / 100)
    let notas50 = Math.trunc((quantia % 100) / 50)
    let notas10 = Math.trunc((quantia % 50) / 10)
    let notas5 = Math.trunc((quantia % 10) / 5)
    let notas1 = Math.trunc(quantia % 5)

    let resultado = []

    if (notas100 > 0) {
        resultado.push(`${notas100} nota(s) de R$ 100`)
    }
    if (notas50 > 0) {
        resultado.push(`${notas50} nota(s) de R$ 50`)
    }
    if (notas10 > 0) {
        resultado.push(`${notas10} nota(s) de R$ 10`)
    } 
    if (notas5 > 0) {
        resultado.push(`${notas5} nota(s) de R$ 5`)
    }
    if (notas1 > 0) {
        resultado.push(`${notas1} nota(s) de R$ 1`)
    }

    return resultado.join('; ')
}

console.log(cedulasMonetarias(188))