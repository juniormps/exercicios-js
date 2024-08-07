//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function divisao(dividendo, divisor) {
    let resultado = (dividendo / divisor).toFixed(2)
    let resto = dividendo %  divisor

    console.log(`O resultado de ${dividendo} dividido por ${divisor} é igual à ${resultado} \ne o resto da divisão é ${resto}`)

}

divisao(20, 3)