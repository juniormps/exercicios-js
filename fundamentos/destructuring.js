//Operador DESTRUCTTURING (novo recurso do ES2015)

//É um operador utilizado para retirar atributos de dentro de um OBJETO ou um ARRAY e transformá-lo em uma VARIÁVEL

//Para utilizar com OBJETO, usa-se "{ }"
//Para utilizar com ARRAY, usa-se "[ ]"

//Segue os exemplos:

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)  //Aqui foram extraídos os atributos "nome" e "idade" do objeto "pessoa" e transformados nas constantes "nome" e "idade"

const { nome: n, idade: i } = pessoa
console.log(n, i)  //Aqui foi feita a mesma coisa que acima, porém, foi atribuído outros nomes às constante que receberam os atributos "nome" e "idade". No caso, foi atribuído os nomes "n" e "i" respectivamente.

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)  //Aqui temos um exemplo do que acontece caso tente-se extrair atributos que não existam no objeto. Os mesmo ficarão com valor "undefined". Para isto não acontecer nesta situação, o ideal é setar o valor "true"

const { endereço: { logradouro, numero, cep } } = pessoa
console.log(logradouro)  //Aqui temos um exemplo de tentativa de acesso a um atributo inexistente dentro de um outro objeto que está dentro do objeto. O resultado será igual acima, "undefined"

const { conta: { ag, num } } = pessoa
console.log(ag, num)  //Porém se no caminho do atributo buscado, existir algo inexistente, o resultado apresentará ERRO, como neste exemplo.