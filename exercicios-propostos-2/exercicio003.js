//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.


function potenciaNum(base, expoente) {
    resultado = Math.pow(base, expoente)
    return console.log(`O resultado de ${base} elevado a ${expoente} é igual à: ${resultado}`)
}

potenciaNum(3, 2)