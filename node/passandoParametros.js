//Passando parâmetros para uma função importada de outro módulo.

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}