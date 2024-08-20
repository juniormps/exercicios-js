//33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.


function concatenarVetores(vetor1, vetor2) {
    return vetor1.concat(vetor2)
}


const vetorInteiro = [10, 20, 30, 40]
const vetorString = ['Dez', 'Vinte', 'Trinta', 'Quarenta']
const vetorDouble = [1.5, 2.8, 3.7, 5.35]

const vetorConcatenado1 = vetorInteiro.concat(vetorString)
console.log(vetorConcatenado1)

const vetorConcatenado2 = concatenarVetores(vetorInteiro, vetorDouble)
console.log(vetorConcatenado2)

const vetorConcatenado3 = [].concat(vetorInteiro, vetorString, vetorDouble)
console.log(vetorConcatenado3)

