//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, taxaAoMes, tempoMeses) {
    let juros  = capital * taxaAoMes * tempoMeses
    let montante = (capital + juros).toFixed(2).replace('.', ',')

    console.log(`O montante da aplicação, sob o regime de juros simples é igual à R$ ${montante}`)
}


jurosSimples(100, 0.05, 12)


function jurosCompostos(capital, taxaAoMes, tempoMeses) {
    let montante = capital * ((1 + taxaAoMes) ** tempoMeses)
    let montanteFormatado = montante.toFixed(2).replace('.', ',')

    console.log(`O montante da aplicação, sob o regime de juros compostos é igual à R$ ${montanteFormatado}`)
}

jurosCompostos(100, 0.05, 12)