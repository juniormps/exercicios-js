//Formas de criar OBJETOS

//Usando a notação literal 
const obj1 = {}
console.log(obj1)


//Através da função construtora "Object" e o operador "new"
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)


//Criando a própria função construtora
function Produto(nome, preco, desc) {
    this.nome = nome                    
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneca', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1.nome, p2.nome)

//OBS.: o "this" torna os atributos públicos, ou seja, visíveis/alteráveis fora da função "Produto".


//Com uma função FACTORY
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())


//Através da função "create", que pertence a Object.
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Através de uma função que recebe um JSON e o transforma em objeto.
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)