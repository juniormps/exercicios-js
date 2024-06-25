//Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

function removerAtributo(objeto, atributo) {
    const copiaObjeto = {...objeto}
    delete copiaObjeto[atributo]
    return copiaObjeto
}

const pessoa = {
    nome: 'Marcio',
    ano_nascimento: 1987,
    naturalidade: 'RJ',
    nacionalidade: 'Brasileiro'  
}

console.log(removerAtributo(pessoa, 'ano_nascimento'))

//A CHAMADA DA FUNÇÃO NÃO ESTÁ FUNCIONANDO