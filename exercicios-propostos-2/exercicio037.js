//37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termos), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos.

function progressaoAritmetica(numTermos, a1, razao) {
    const somaNTermos = (numTermos / 2) * (2 * a1 + ((numTermos - 1) * razao))

    const termosPA = []
    let termo = a1
    
    for (let c = 1; c <= numTermos; c++) {
        termosPA.push(termo)
        termo += razao
    }

    return `Os termos da PA são:\n${termosPA.join(', ')} \nA soma dos termos é igual a: ${somaNTermos}`
}

function progressaoGeometrica(numTermos, a1, razao) {
    let somaNTermos = 0
    if (razao === 1) {
        somaNTermos = a1 * numTermos
    } else {
        somaNTermos = a1 * (((razao**numTermos) - 1) / (razao - 1))

    }

    const termosPG = []
    let termo = a1
    
    for (let c = 1; c <= numTermos; c++) {
        termosPG.push(termo)
        termo *= razao
    }

    return `Os termos da PG são:\n${termosPG.join(', ')} \nA soma dos termos é igual a: ${somaNTermos}`
}

const valorProgressaoAritmetica = progressaoAritmetica(5, 2, 3)
const valorProgressaoGeometrica = progressaoGeometrica(5, 2, 1)

console.log(valorProgressaoAritmetica)
console.log(valorProgressaoGeometrica)

