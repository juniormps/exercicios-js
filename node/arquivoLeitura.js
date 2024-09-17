//Lendo arquivos com o "File Sistem (FS)"

const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


//Para arquivos JSON (forma mais simples) - forma síncrona também
const config = require('./arquivo.json')
console.log(config.db)


//Para ler uma pasta (diretório) inteira. O método "readdir" retorna um array com todos os arquivos que estão contidos dentro do diretório escolhido.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})


//OBS.: "__dirname" => Pasta atual (diretório atual)