/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:

Plano   Aumento
A         10%
B         15%
C         20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function novoSalario (plano, salAtual) {
    switch (plano.toUpperCase()) {
        case "A":
            return salAtual + (salAtual * 0.1)

        case "B":
            return salAtual + (salAtual * 0.15)

        case "C":
            return salAtual + (salAtual * 0.2)

        default:
            return "Plano inválido!"
    }
}


console.log(novoSalario("A", 1500))