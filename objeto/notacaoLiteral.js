//Melhorias da notação literal de objeto do ECS6


//criação do nome do atributo a partir do nome da variável que recebe.
const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}  //Forma antiga
const obj2 = {a, b, c}  //Forma nova
console.log(obj1, obj2)




//É possível criar atributos a partir de strings e variáveis com a notação colchete "[]"
const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo  
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)




//atributo do tipo função
const obj5 = {
    funcao1: function() {  //Forma antiga
        //...
    },
    funcao2() {  //Forma nova
        //...
    }
}

console.log(obj5)