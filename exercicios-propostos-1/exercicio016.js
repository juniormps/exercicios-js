//desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

function checagemAnoBissexto(ano) {
    if (ano % 4 === 0) {
        if (ano % 100 === 0) {
            if (ano % 400 === 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

console.log(checagemAnoBissexto(1998))