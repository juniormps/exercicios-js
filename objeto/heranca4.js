//Protótipo de objetos criados a partir de uma FUNÇÃO CONSTRUTORA

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Objetos criados a partir de uma mesma função construtora, possuem o mesmo prototype.
console.log(obj1.__proto__ === obj2.__proto__)  


//O protótipo de um objeto criado a partir de uma função construtora, apontará sempre para esta função construtora que o criou seguido de "prototype" (ex.: MeuObjeto.prototype).
console.log(MeuObjeto.prototype === obj1.__proto__)  
//Obs.: ao contrário dissso, quando o objeto é criado de forma literal ou a partir da função "new Object", o prototype dele apontará por padrão para "Object.prototype".


//Aqui foram adicionados atributos ao protótipo (Objeto pai)
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
//Ou seja, todos os objetos criados a partir da função construtora "MeuObjeto" terão os atributos "nome" e "falar" herdados do protótipo.


obj1.falar()  //irá chamar o atributo "falar" (que é uma função) do protótipo do obj1

obj2.nome = 'Rafael'  //Irá sobrescrever o atributo nome do protótipo com o valor "Rafael".
obj2.falar()



//Aqui foi criado um objeto de forma literal
const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype  //Por padrão, ele teria "Object.prototype" como protótipo, já que é um objeto criado de forma literal. Mas, como pode ser visto, o protótipo foi alterado manualmente para "MeuObjeto.prototype".

//Sendo assim, ele herda os atributos deste novo prototype.
obj3.nome = 'Obj3'
obj3.falar()



//Observações finais

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)  //Protótipo de um objeto criado a partir da função "MeuObjeto"

console.log(MeuObjeto.__proto__ === Function.prototype)  //Protótipo da função construtora "MeuObjeto".

console.log(Function.prototype.__proto__ === Object.prototype)  //Protótipo do protótipo de uma função construtora.

console.log(Object.prototype.__proto__ === null)  //Protótipo final (diferente de "undefined")