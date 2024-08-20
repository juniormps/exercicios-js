//39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar

function inversaoDeVetores(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        return 'Os vetores precisam ter o mesmo tamanho!'
    }

    for (let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] ^ vetor2[i]
        vetor2[i] = vetor1[i] ^ vetor2[i]
        vetor1[i] = vetor1[i] ^ vetor2[i]
    }

    return `Os vetores invertidos são:\n${vetor1} \ne\n${vetor2}`
}

let vetorDeNumeros1 = [1, 2, 3, 4, 5]
let vetorDeNumeros2 = [10, 9, 8, 7, 6]

const vetoresInvertidos = inversaoDeVetores(vetorDeNumeros1, vetorDeNumeros2)

console.log(vetoresInvertidos)