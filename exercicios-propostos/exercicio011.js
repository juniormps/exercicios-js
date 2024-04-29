//Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array: 

function novoArray(arrayPrincipal) {
    const arrayNovo = []
    ultimoIndice_ArrayPrincipal = arrayPrincipal.length - 1
    arrayNovo.push(arrayPrincipal[0], arrayPrincipal[ultimoIndice_ArrayPrincipal]) 

    return arrayNovo
} 

let pessoa1 = ['Junior', 1987, 36]
let pessoa2 = ['Alda', 1957, 66]
console.log(novoArray(pessoa2))