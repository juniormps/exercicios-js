//Escopo global do "Node" (equivalente ao Window no browser)

// console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})