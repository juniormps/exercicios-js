//A estrutura "Map" é parecida com um objeto

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) //desta forma não funciona
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})


console.log(chavesVariadas.has(123)) //retorna se o elemento está contido no Map
chavesVariadas.delete(123) //exclui o elemento de dentro do Map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //retorna a quantidade de elementos em um Map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //A estrutura Map não aceita chaves repetidas
chavesVariadas.set(456, 'b') //porém aceita valores repetidos
console.log(chavesVariadas)