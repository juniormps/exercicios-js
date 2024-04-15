//Aula sobre "this" e "bind"

//EXEMPLO 01
//No exemplo abaixo, o "this" se refere ao dono da função "falar" (contexto no qual está inserida), que no caso é o objeto "pessoa". Ou seja, o "console.log", vai procurar o atributo saudação dentro o objeto "pessoa".
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()  //imprime "Bom dia!"


//EXEMPLO 02
const falar = pessoa.falar
falar()  //imprime "undefined", por conta de conflito entre o paradigma funcional e OO


//EXEMPLO 03
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
