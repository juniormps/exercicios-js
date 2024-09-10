//Como acessar Módulos

//Impotando um módulo de algum diretório do projeto. Cada "../" você volta uma pasta.
const moduloA = require('../../moduloA')  //Aqui voltou para a "pastaA", depois para a pasta "node"
console.log(moduloA.ola)


//Importando um módulo de uma biblioteca que eu mesmo criei e coloquei na pasta "node_moules"
const saudacao = require('saudacao')
console.log(saudacao.ola)


//Importando de um diretório que está no mesmo nível. Utiliza-se "./nomeDaPasta".
const c = require('./pastaC')  //O arquivo "index" já é buscado por default, sem precisar escrevê-lo.
console.log(c.ola2)


//Importando um módulo que já vem previamente instalado junto com o Node (módulos core)
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)