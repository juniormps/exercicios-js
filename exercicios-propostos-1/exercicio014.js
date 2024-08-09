//Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:

function objetoParaArray(objeto) {
    const arrayCliente = []
    for(let atributo in objeto) {
        arrayCliente.push([atributo, objeto[atributo]])
    }
    return arrayCliente
}

const cliente = {
    nome: 'Samuel',
    idade: 10,
    ano_nascimento: 2014,
    nacionalidade: 'Brasileiro'
}

console.log(objetoParaArray(cliente))


//PODERIA TAMBÉM SER FEITO COMO ABAIXO:
/*
function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

const cliente = {
    nome: 'Samuel',
    idade: 10,
    ano_nascimento: 2014,
    nacionalidade: 'Brasileiro'
}

console.log(objetoParaArray(cliente))
*/