//Métodos Getters e Setters

//São técnicas de ENCAPSULAMENTO de código
//Ou seja, os atributos de um objeto são colocados de maneira privada e são acessados  de maneira controlada, através dos métodos Getter e Setter

//CONVENÇÃO: quando uma variável é nomeda com "_" no ínício do nome, fica convencionado que a mesma não deve ser acessada diretamente. Ou seja, esta variável deve ser acessada atrvés dos métodos getter e setter. Entretanto, vale ressaltar que isto é uma convenção. Nada impede de acessá-las diretamente.

const sequencia = {
    _valor: 1,
    get valor() { return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
