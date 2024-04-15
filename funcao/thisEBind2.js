//"this" e a função "bind" - parte 2

//Utilizando uma constante para apontar o "this". Normalmente, nomeia-se esta constante com o nome "self"

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa