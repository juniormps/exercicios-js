//Aula sobre declaração de variável com VAR

//ESCOPO são os locais onde são possíveis ver e acessar uma variável.

//uma variável declarada com "var" terá um escopo global, ou seja, será visível dentro e fora do bloco em que foi declarada, EXCETO se a mesma for declarada dentro do bloco de uma FUNÇÃO.

//EXEMPLO 1 - variável declarada com var SEM SER em um bloco de uma FUNÇÃO. Desta forma é dito que a variável possui um escopo GLOBAL.
{
    {
        {
            var sera = 'Será???'
            console.log(sera)
        }
    }
}

console.log(sera)

//A variável consegue ser acessada tanto dentro do bloco em que foi declarada, como fora dele.

//OBS.: na maioria das outras linguagens de programação, a variável possui escopo apenas dentro do bloco em que foi declarada (como Let).


//EXEMPLO 2 - variável declarada DENTRO do bloco de uma FUNÇÃO.
function teste() {
    var local= 123
    console.log(local)
}

teste()
console.log(local)  //Aqui dá ERRO. Neste caso, a variável só consegue ser acessada dentro do bloco da função em que foi declarada.