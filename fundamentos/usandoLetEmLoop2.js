//Aula sobre o uso de declaração de variável com "LET" em uma estrutura de repetição LOOP.

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)  //Neste caso, aqui o valor de "i" não será impresso e apresentará um ERRO, pois a variável foi declarada com "let" e portanto, a mesma só é visíveldentro do bloco em que foi declarada, ou seja, dentro do looping.