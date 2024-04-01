//OPERADORES LÓGICOS

//EXEMPLO
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2  //o "!=" pode substituir o "OU EXCLUSIVO"
    const manterSaudavel = !comprarSorvete  //o "!" é um operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}


//POSSÍVEIS COMBINAÇÕES DE VALORES A SEREM PASSADOS PARA OS PARÂMETROS DA FUNÇÃO "COMPRAS"
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))