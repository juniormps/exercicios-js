const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')  //Adiciona um elemento na última posição do array.
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')  //Adiciona um elemento no início do array (índice[0])
console.log(pilotos)



// O método "splice" pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) 
console.log(pilotos)


//O método "slice" COPIA uma parte do array
//O primeiro parâmentro passado é o índice a partir do qual se deseja a cópia (INCLUSIVE); o segundo é onde terminará (EXCLUSIVE).
const algunsPilotos1 = pilotos.slice(2) //Caso não seja passado um segundo parâmetro, a cópia irá até o fim.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)