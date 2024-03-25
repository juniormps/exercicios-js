//Aula sobre a Notação Ponto "."

//No exemplo abaixo, foi usada a notação ponto "." para acessar função dentro dos objetos "console" e "Math"
console.log(Math.ceil(6.1))   //A função "Ceil" do objeto "Math" arredonda um valor para cima.

const obj1 = {}
obj1.nome = 'Bola'  //Aqui, a notaçãoponto foi utilizada para criar dinamicamente um atributo dentro do objeto "obj1"

/*
obj1['nome'] = 'Bola2'  -> Esta seria uma forma de criar um atributo dentro do objeto "obj1" de outra forma sem ser com a notação ponto
*/

console.log(obj1.nome)

