//ARROW FUNCTION 02

//O "this" em uma ARROW FUNCTION possui um valor fixo.

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa