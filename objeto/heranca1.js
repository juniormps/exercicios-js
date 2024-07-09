//HERANÇA

//O objetivo da herança é a REUTILIZAÇÃO DE CÓDIGO sem que seja preciso copiar e colar.

//Em JavaScript, a herança é baseada em protótipos (prototypes)

//Protótipo é o objeto pai.

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)  //"__proto__" é a forma de acessar o protótipo de um objeto, ou seja, o objeto pai

console.log(ferrari.__proto__ === Object.prototype)  //"Object.prototype" é o objeto pai padrão

console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)  //Null



//Funções também possuem prototypes

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)