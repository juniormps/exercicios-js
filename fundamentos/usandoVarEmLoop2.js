//Aula 2 sobre o declaração de variável utilizando "VAR" em estrutura de repetição LOOP.

//Exemplo de declaração de variável utilizando "var" com ARRAY E LOOP
const funcs = [] 

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs [2] ()
funcs [8] ()