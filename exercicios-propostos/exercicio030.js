//Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

function mediaAluno(obj) {
    const resultado = Object.entries(obj)
    resultado.forEach(element => {
        let media = element[1]  
    });

    return resultado
}

const notasAlunos = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

console.log(mediaAluno(notasAlunos))