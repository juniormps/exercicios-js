//27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function criancas(crianca1, crianca2) {
    let resultado = ""

    //Se a criança 1 for maior que a criança 2
    if (crianca1.altura > crianca2.altura) {

        resultado += `O ${crianca1.nome} é mais alto que o ${crianca2.nome}.\n`

        if (crianca1.taxaCrescimento >= crianca2.taxaCrescimento) {
            resultado += `O ${crianca2.nome} não irá ultrapassá-lo.`
        } else {
            let ultrapassagem = (crianca2.altura - crianca1.altura) / (crianca1.taxaCrescimento - crianca2.taxaCrescimento)

            resultado += `O ${crianca2.nome} irá ultrapassá-lo em ${ultrapassagem.toFixed(1).replace('.', ',')} ano(s).`
        }


    //Se a criança 2 for maior que a criança 1
    } else if (crianca2.altura > crianca1.altura) {

        resultado += `O ${crianca2.nome} é mais alto que o ${crianca1.nome}.\n`

        if (crianca2.taxaCrescimento >= crianca1.taxaCrescimento) {
            resultado += `O ${crianca1.nome} não irá ultrapassá-lo.`
        } else {
            let ultrapassagem = (crianca1.altura - crianca2.altura) / (crianca2.taxaCrescimento - crianca1.taxaCrescimento)

            resultado += `O ${crianca1.nome} irá ultrapassá-lo em ${ultrapassagem.toFixed(1).replace('.', ',')} ano(s).`
        }


    //Se as duas crianças tiverem a mesma altura
    } else if (crianca1.altura == crianca2.altura){

        resultado += `O ${crianca1.nome} e o ${crianca2.nome} têm a mesma altura.\n`

        if (crianca1.taxaCrescimento > crianca2.taxaCrescimento) {
            let ultrapassagem = (crianca1.altura - crianca2.altura) / (crianca2.taxaCrescimento - crianca1.taxaCrescimento)

            resultado += `O ${crianca1.nome} irá ultrapassar o ${crianca2.nome} em ${ultrapassagem.toFixed(1).replace('.', ',')} ano(s).`

        } else if (crianca2.altura > crianca1.altura) {
            let ultrapassagem = (crianca2.altura - crianca1.altura) / (crianca1.taxaCrescimento - crianca2.taxaCrescimento)

            resultado += `O ${crianca2.nome} irá ultrapassar o ${crianca1.nome} em ${ultrapassagem.toFixed(1).replace('.', ',')} ano(s).`
        }
    }

    return resultado
}


function Crianca(nome, altura, txCrescimento) {
    this.nome = nome
    this.altura = altura  // Centímetros
    this.taxaCrescimento = txCrescimento  // Centímetros/ano
}

const c1 = new Crianca('Marcio Junior', 70, 8)
const c2 = new Crianca('Samuel Rocha', 80, 9)
const c3 = new Crianca('José Rocha', 75, 6)
const c4 = new Crianca('Malaquias Azevedo', 85, 4)

console.log(criancas(c2, c4))