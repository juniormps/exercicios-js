//Função recebe a quantidade de horas trabalhadas de um funcionário e quanto ele recebe por hora de trabalho. Retorna o salário mensal.

function calculoSalario(horasTrab, valorHora) {
    let salarioMensal = horasTrab * valorHora
    console.log('Salário igual a R$', salarioMensal)
}

calculoSalario(160, 32.3)