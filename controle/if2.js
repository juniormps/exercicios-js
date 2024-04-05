//Observações sobre a estrutura de controle "IF"

//Um "IF" pode ser usado sem CHAVES, porém, apenas o primeiro comando após ele, será considerado como dentro do bloco.
function teste(num) {
    if(num > 7)
        console.log(num)
        console.log('Final')  //Neste caso, a string "Final" será sempre executada, independente se a condição do "if" for verdadeira ou falsa
}

teste(6)
teste(8)

//ATENÇÃO: CUIDADO COM O PONTO E VÍRGULA. Neste caso, o bloco do "if" será considerado um bloco vazio e o bloco "console.log(num) será considerado um bloco fora do "if".
function teste2(num) {
    if(num > 7); {       
        console.log(num)
    }
}

teste2(6)
teste2(8)