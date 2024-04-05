//Estrutura de Repetição - "DO - WHILE" (FAÇA - ENQUANTO)

//É UMA REPETIÇÃO COM TESTE NO FINAL.
//estrutura parecida com o "while", porém com a lógica invertida. 

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima!')