//This

console.log(this === global)
console.log(this === module)


//Fora de uma função, o "this" aponta para os dois objetos abaixo.
console.log(this === module.exports)
console.log(this === exports)


//Dentro de uma função, o "this" aponta para "global" (execeto se for uma ARROW FUNCTION. Neste caso, o "this" aponta para "module.exports")
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.exemplo1 = 'exemplo'  //Aqui, o "this" aponta para o objeto "global"
}

this.exemplo2 = 'exemplo'  //Aqui, o "this" aponta para o "module.exports"

logThis()