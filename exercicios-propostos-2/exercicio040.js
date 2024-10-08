//40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

function conceitoNotas(notas) {
    const conceitos = []

    for (let nota of notas) {
        if (nota <= 4.9) {
            conceitos.push('D')
        } else if (nota <= 6.9) {
            conceitos.push('C')
        } else if (nota <= 8.9) {
            conceitos.push('B')
        } else if (nota <= 10) {
            conceitos.push('A')
        }
    }

    return conceitos

}

const notas = [10.0, 3.7, 5.8, 8, 10]

console.log(conceitoNotas(notas))