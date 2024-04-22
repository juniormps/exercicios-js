//CONTEXTO LÉXICO

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

//A função leva consigo o contexto léxico em que foi declarada.