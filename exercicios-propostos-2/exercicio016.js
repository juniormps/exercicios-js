/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. 
Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadoraBasica(valor1, operacao, valor2) {
    switch (operacao) {
        case "+":
            return valor1 + valor2

        case "-":
            return valor1 - valor2

        case "*":
            return valor1 * valor2

        case "/":
            if (valor2 === 0) {
                return "Erro: Divisão por zero."
            }
            return valor1 / valor2

        default:
            return "Operação Inválida."
    }
}


console.log(calculadoraBasica(4, '/', 8))