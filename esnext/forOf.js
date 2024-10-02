//Enquanto o "for in" itera em cima de indices, o "for of" itera em cima de valores.

//Iterando em uma string
for (let letra of "Cod3r") {
    console.log(letra)
}


//Iterando em um array
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}


//Iterando em um Map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {  //retornará o par chave/valor
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {  //retornará apenas as chaves(keys)
    console.log(chave)
}

for (let valor of assuntosMap.values()) {  //retornará apenas os valores (values)
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {  //retornará o par chave/valor, porém desestruturado.
    console.log(ch, vl)
}


//Iterando em um Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}