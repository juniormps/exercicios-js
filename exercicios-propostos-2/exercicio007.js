//07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

function equacaoSegundoGrau(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c

    if (delta < 0) {
        console.log('O delta é negativo e portanto a equação não possui raízes reais.')
    } else {
        let raiz1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2).replace('.', ',')
        let raiz2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2).replace('.', ',')

        resultado = []
        resultado.push(raiz1, raiz2)

        console.log(`As raízes da equação são: ${resultado[0]} e ${resultado[1]}`)
    }
}

equacaoSegundoGrau(1, 5, 1)