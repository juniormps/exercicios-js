//FUNÇÃO CALLBACK - PARTE 1

//trata-se de passar uma função como parâmetro de outra função

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)  
//"forEach" é uma função que existe dentro de todo Array. Ela retorna o item e seu respectivo índice. Note que foi passada a função "imprimir" como parâmetro para a função "forEach".

fabricantes.forEach(function(a) {
    console.log(a)
})
//Como a função anônima acima possui apenas um parâmetro, a função "forEach" irá passar apenas o item para a mesma (o nome do fabricante).

//A função acima poderia ser escrita como função arrow tbm.
fabricantes.forEach(a => console.log(a))