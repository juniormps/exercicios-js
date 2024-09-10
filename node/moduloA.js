//Formas de exportar itens de um módulo  "node" para serem utilizados em um outro arquivo.

//Criando atributos dinamicamente nos objetos "this" e "exports"

console.log(this)

//Utilizando o "this"
this.ola = 'Fala Pessoal'

//Utilizando o "exports"
exports.bemVindo = 'Bem vindo ao node!'

//Utilizando o "module.exports"
module.exports.ateLogo = 'Até próximo exemplo'


//Obs.: tanto o "this", como o "exports" são Objetos.