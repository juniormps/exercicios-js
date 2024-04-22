//TIPOS DE DELCARAÇÕES DE FUNÇÕES


//Function Declaration (forma tradicional)
console.log(soma(3, 4))

function soma(x, y) {
    return x + y
}
//esta forma tem a vantagem de poder ser chamada antes mesmo de ser declarada, como pode ser visto acima.




//Function Expression (forma atribuindo à uma constante ou uma variável)
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))
//esta forma só pode ser chamada após sua declaração




//Named Function Expression (uma mistura das duas acima)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
//esta forma tbm só pode ser chamada após sua declaração.