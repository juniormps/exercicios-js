//Como acessar Módulos

//Cada "../" você volta uma pasta
const moduloA = require('../../moduloA')  //Aqui voltou para a "pastaA", depois para a pasta "node"
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)