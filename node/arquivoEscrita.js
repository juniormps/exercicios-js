//Escrevendo arquivos em disco com o Node.JS

const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}


//O método "writeFile" recebe três parâmetros:
//1 - caminho do diretório que o arquivo novo será salvo + nome do arquivo gerado
//2 - formato do arquivo
//3 - callback
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})