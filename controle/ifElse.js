//Estruturas de Controle - "IF / ELSE"

const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa!')  //CUIDADO!!! por conta do JS ser uma linguagem fracamente tipada, neste caso ele não apresentará ERRO. Ao invés disso, ele tentará comparar a string "Epa!" com o número 7 e retornará o valor FALSO.