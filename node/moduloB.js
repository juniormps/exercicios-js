//Outra forma de exportar itens de um módulo "node" para serem utilizados em um outro arquivo.

//Atribuindo um novo OBJETO ao "module.exports"

module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}