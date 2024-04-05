//Tratamento de erro - TRY / CATCH / THROU

function tratarErroELancar(erro) {
    throw new Error('Desculpe! Ocorreu um Erro...')
    //throw 10
    //throw true
    //throw 'Desculpe o transtorno!'
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritando(obj)