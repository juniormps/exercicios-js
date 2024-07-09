//Cadeia de Prtótipos (Prototype Chain)

Object.prototype.attr0 = 0  //EVITAR FAZER ISTO!!!
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: 'Z'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)
console.log(filho.attr5)  //Undefined

//OBS.: o "attr3" retornará "C", pois ele retorna o primeiro valor encontrado na hierarquia.




//Object.setPrototypeOf => outra forma de relacionar objetos e estabelecer uma cadeia de protótipos (além da forma acima)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324  //shadowing (sombreamento do atributo de mesmo nome no objeto pai "carro")
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`  //O "this" referencia o objeto atual. O "super" referncia o protótipo (objeto pai)
    } 
}

Object.setPrototypeOf(ferrari, carro)  //fica estabelecido que o objeto "ferrari" é o filho e o objeto "carro" é o pai
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())