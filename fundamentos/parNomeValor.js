//Aula sobre Par Nome/Valor

//Contexto Léxico = Escopo

const saudacao = 'Opa'  //Contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa'  //Contexto léxico 2
    return saudacao
}


//Abaixo temos um exemplo de um OBJETO
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {  //Aqui temos um objeto dentro de outro objeto
        lougradouro: 'Rua Muito Legal',
        numero: 123
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)