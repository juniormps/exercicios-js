//Revisão de OBJETOS

//Objetos são coleções dinâmicas de pares chave/valor (os quais podem ser acrescentados e deletados a qualquer momento)

//EXEMPLO 01
//Criando objetos com o operador "new" e a função construtora "Object"
const produto = new Object

produto.nome = 'Cadeira'  //aqui foi criado o atributo "nome" e um valor para o mesmo, na caso "Cadeira"

produto['marca do produto'] = 'Generica'  //aqui tbm foi criando um atributo, porém com a notação de colchetes. Desta forma, o nome do atributo pode conter espaços e começar com número.

produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)



//EXEMPLO 02
//um objeto pode receber todos os tipos de valores como atributos: strings, numeros, arrays, outros objetos, funções, etc.

const carro = {
    modelo: 'A4',
    valor: 89000,

    proprietario: {     //um atributo que recebe um objeto como valor.
        nome: 'Marcio',
        idade: 65,

        endereco: {    //E que por sua vez, recebe outro objeto aqui.
            logradouro: 'Rua Padre Leonel Franca',
            numero: 261
        }
    },

    condutores: [{   //aqui o atributo recebe um array, o qual recebe objetos.
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Alda',
        idade: 66
    }],

    calcularValorSeguro: function() {   //aqui recebe uma função
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Vieira Souto'

console.log(carro)

//ATENÇÃO ao deletar atributos de um objeto. Pois ao ser deletado, todos os outros abaixo dele, dentro de sua hierarquia, serão deletados tbm.
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)

//ATENÇÃO: cuidado ao acessar um atributo de um objeto, pois de este atributo estiver nulo ou indefinido, como no exemplo abaixo, em que "condutores" foi deletado anteriormente, a operação apresentará ERRO.
//console.log(carro.condutores.length)