//Condição Simples - "IF"

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1)  //verdadeiro
soBoaNoticia(6.1)  //falso

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo()  //falso
seForVerdadeEuFalo(null)  //falso
seForVerdadeEuFalo(undefined)  //falso
seForVerdadeEuFalo(NaN)  //falso
seForVerdadeEuFalo('')  //falso - string vazia
seForVerdadeEuFalo(0)  //falso - zero é o único número considerado falso
seForVerdadeEuFalo(-1)  //verdadeiro - qualquer número diferente de zero
seForVerdadeEuFalo(' ')  //verdadeiro - string com espaço dentro (diferente de string vazia)
seForVerdadeEuFalo('?')  //verdadeiro - string
seForVerdadeEuFalo([])  //verdadeiro - array vazio
seForVerdadeEuFalo([1, 2])  //verdadeiro - array preenchido
seForVerdadeEuFalo({})  //verdadeiro - objeto vazio
