//35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final das operações imprima os vetores no console.

const vetorpilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

vetoresConcatenados = vetorpilha.concat(vetorAdiciona)

console.log(vetoresConcatenados)


//OU COMO ABAIXO

const vetorpilha2 = [1, 2, 3, 4, 5]
const vetorAdiciona2 = [6, 7, 8, 9, 10]

for (let elemento of vetorAdiciona2) [
    vetorpilha2.push(elemento)
]

console.log(vetorpilha2, vetorAdiciona2)

