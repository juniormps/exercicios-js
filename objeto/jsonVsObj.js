//JSON vs Objeto

//JSON (JavaScript Object Notation) é um formato de dados textual utilizado para a interoperabilidade entre sistemas.

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

//Aqui foi transformado em JSON o objeto "obj"
console.log(JSON.stringify(obj))

//Obs.: pelo fato de JSON ser um formato textual, o atributo "soma" (que é uma função) não será convertido.


//Aqui, um JSON foi transformado em objeto
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))

//Obs.: Note que é preciso que o futuro objeto esteja entre "aspas simples" e seus atributos entre "aspas duplas". Se não for assim, dará erro, como nos casos abaixo.
//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))


//Outro exemplo de transformação de um JSON em um objeto
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))