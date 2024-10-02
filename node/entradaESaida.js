//Objedo "process"

//O objeto "process" é um objeto global do Node.JS, através do qual é possível ler e imprimir dados da entrada e saída padrões do computador (teclado e monitor respectivamente)

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')  //imprimi no terminal
    process.exit()  //encerra o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}