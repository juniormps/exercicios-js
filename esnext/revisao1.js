// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
//Obs.: a "template string" considera tab e quebras de linha
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring (tirar algo de dentro de uma estrutura)
//No exemplo abaixo, será desetruturada a string "Cod3r"
//a primeira letra será atribuída à variável "l", a segunda à "e" e o restante à "tras" utilizando o operador rest "..."
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

//No exemplo abaixo, será desetruturado um array, retornando o primeiro e o terceiro elementos e ignorando o segundo.
const [x, , y] = [1, 2, 3]
console.log(x, y)

//No exemplo abaixo, será desestruturado um objeto. A variável idade foi renomeada para "i", mas poderia continuar com o mesmo nome "idade".
const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)