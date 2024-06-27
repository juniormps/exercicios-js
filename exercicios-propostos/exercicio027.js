//Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.

/*
APRENDIZADO COM O EXERCÍCIO: OS MÉTODOS "Object.entries()" e "Object.fromEntries()"

  Object.entries() => este médodo recebe um objeto como parâmetro e retorna um array de arrays, no qual estes subarrays contidos no primeiro são arrays com dois elementos, os quais por sua vez são os pares chave/valor do objeto.

  Object.fromEntries() => este método faz o inverso do mencionado acima. Ele transforma em objeto, um array de arrays, no qual estes subarrays do array são arrays com apenas dois elementos, os quais serão transformados em pares chave/valor do objeto.
  
*/

function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach( parChaveValor => {
        //const chave = 0,
        //valor = 1
        objetoInvertido[ parChaveValor[1] ] = parChaveValor[0]
    })
    return objetoInvertido
}

const pessoa = {
    nome: 'Marcio',
    ano_nascimento: 1987,
    naturalidade: 'RJ',
    nacionalidade: 'Brasileiro'  
}

console.log(inverter(pessoa))



//OU PODE SER FEITO DA MANEIRA ABAIXO TAMBÉM:

function inverterObjeto(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )

    return Object.fromEntries(paresDeChaveValorInvertidos)
}

const pessoa2 = {
    nome: 'Alda',
    ano_nascimento: 1957,
    naturalidade: 'RJ',
    nacionalidade: 'Brasileira'  
}

console.log(inverterObjeto(pessoa2))

console.log(pessoa)
console.log(pessoa2)