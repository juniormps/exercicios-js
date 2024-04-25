//Função recebe a quantidade de horas trabalhadas de um funcionário e quanto ele recebe por hora de trabalho. Retorna o salário mensal.

function calculoSalario(horasTrab, valorHora) {
    let salarioMensal = horasTrab * valorHora
    console.log('Salário igual a R$', salarioMensal)
}

calculoSalario(160, 32.3)


//---------------------------------------------------------------------------------//

//Função recebe a quantidade de horas trabalhadas de um funcionário e quanto ele recebe por hora de trabalho. Retorna o salário mensal descontado 30% de imposto.

let salarioFinal = (horasTrab, valorHora, imposto = 0.3) => {
    let salarioBase = horasTrab * valorHora
    let desconto = salarioBase * imposto
    let salarioMensal = salarioBase - desconto 
    return salarioMensal
}

console.log('\nSalário igual a R$', salarioFinal(100, 15.5))