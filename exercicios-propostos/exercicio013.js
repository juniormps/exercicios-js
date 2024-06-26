//Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

function filtrarNumeros(valores) {
    let novoElementos = []
    for(let i in valores) {
        if (typeof valores[i] == "number") {
            novoElementos.push(valores[i])
        }
    }
    return novoElementos
}

const elementos1 = ['JavaScript', 1, 365, 'Junior', '1987', 36, 'Brasil', 1958]
const elementos2 = ['Alda', 'Sabrina', 'Marcio', 'Guto', 'Samuel', 'José']

console.log(filtrarNumeros(elementos1))


//Também poderia ser feito como abaixo: (ficaria até melhor)

/*
function filtrarNumeros(valores) {
    let novoElementos = []
    for(let item of valores) {
        if (typeof item == "number") {
            novoElementos.push(item)
        }
    }
    return novoElementos
}

const elementos1 = ['JavaScript', 1, 365, 'Junior', '1987', 36, 'Brasil', 1958]
const elementos2 = ['Alda', 'Sabrina', 'Marcio', 'Guto', 'Samuel', 'José']

console.log(filtrarNumeros(elementos1))
*/


//Ou como abaixo:

/*
function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}

const elementos1 = ['JavaScript', 1, 365, 'Junior', '1987', 36, 'Brasil', 1958]
const elementos2 = ['Alda', 'Sabrina', 'Marcio', 'Guto', 'Samuel', 'José']

console.log(filtrarNumeros(elementos1))
*/