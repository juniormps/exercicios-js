//Aula de OBJETOS
//Um objeto é uma coleção de pares CHAVE/VALOR

const prod1 = {}  //um par de chaves representa um objeto
prod1.nome = 'Celular Ultra Mega'  //neste exemplo, temos a chave "nome" e seu respectivo valor "Celular Ultra Mega". 
prod1.preco = 4998.90  //neste outro exemplo, temos a chave "preco" e seu respectivo valor "4998.90". 
//Ambos exemplos acima são um pares CHAVE/VALOR dentro do objeto "prod1"

console.log(prod1)

//Outra forma de criar pares/valores em um objeto
const prod2 = {
    nome: 'Camisa Polo',  //ATENÇÃO: observar a VÍRGULA. Sem ela, dá ERRO.
    preco: 79.90
}

console.log(prod2)
