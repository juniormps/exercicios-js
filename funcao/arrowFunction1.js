//ARROW FUNCTION
//Função Arrow é uma forma abreviada de escrever funções.
//Toda função "arrow" é uma função anônima, por isso é preciso armazená-la em uma variável.

//EXEMPLO 01
//FORMA NORMAL
let dobro = function (a) {
    return 2 * a
}


//ARROW FUNCTION 01
//O exemplo abaixo é uma função ARROW que representa a mesma função acima. 
//OBSERVE que a palavra "function" é substituida pela seta "=>"
dobro = (a) => {
    return 2 * a
}


//ARROW FUNCTION 02
//a forma abaixo tbm representa a mesma função, mas de forma ainda mais reduzida.
//normalmente é utilizado assim quando a função só possui UMA LINHA DE COMANDO.
//nesta forma de representação, o RETORNO FICA IMPLÍCITO.
dobro = a => 2 * a

console.log(dobro(Math.PI))

//______________________________________________________________________________//
//EXEMPLO 02

//FORMA NORMAL
let saudacao = function() {
    return 'Olá!'
}

//FORMA "ARROW FUNCTION"
saudacao = () => 'Olá!' 
//ou
saudacao = _ => 'Olá!'

console.log(saudacao())