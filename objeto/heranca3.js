//Definindo o protótipo de um objeto criado com a função "Object.create"

const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)  //o parâmetro "pai" passado no método "create", define o objeto "pai" como protótipo do novo objeto criado "filha1"

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'  //Não aceitará a mudança de valor para "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


//O método "keys" não lista os atributos recebidos como herança. São listados apenas os atributos do objeto de fato.
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


//Já o "for in" percorre todos os atributos do objeto, tanto os nativos, quanto os recebidos por herança
for(let key in filha2) {
    console.log(key)
}


//Aqui foi utilizado o operador ternário e o método "hasOwnProperty()" para testar de o atributo é do objeto ou se foi recebido por herança.
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}

