//O método "Foreach" é utilizado para percorrer um array. Ele retorna os elementos deste array para serem manipulados com os mais diversos fins.

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//O primeiro parâmetro passado para a função callback do método é o elemento do array e o segundo é o índice do mesmo.
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
//Obs.: caso queira acessar apenas o índice, mesmo assim será necessário receber o primeiro parâmetro que é o elemento.


//A função de callback pode ser escrita na forma de Arrow Function também. E pode receber apaenas um parâmetro.
aprovados.forEach(nome => console.log(nome))

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))


//A função de callback pode ser também armazenada anteriormente em uma variável e depois esta variável é passada para o método Foreach.
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


//Pode ainda ser passado um terceiro parâmetro para a função callback, o qual é o próprio array.
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})