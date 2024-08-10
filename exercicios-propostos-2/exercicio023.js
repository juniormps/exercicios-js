//23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function Aluno(codigo, nome, nota1, nota2, nota3) {
    this.codigo = codigo
    this.nome = nome
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3

    this.notas = [nota1, nota2, nota3].sort()

    this.getMedia = function() {
        return ((this.notas[0] * 3) + (this.notas[1] * 3) + (this.notas[2] * 4)) / (3 + 3 + 4)
    }

    this.getResultadoFinal = function() {
        return this.getMedia() >= 5 ? "APROVADO" : "REPROVAO"
    }

    this.imprimirDados = function() {
        console.log(`Código do Aluno: ${this.codigo}`);
        console.log(`Nome do Aluno: ${this.nome}`);
        console.log(`Notas: ${this.nota1}, ${this.nota2}, ${this.nota3}`);
        console.log(`Média Ponderada: ${this.getMedia().toFixed(2)}`);
        console.log(`Resultado: ${this.getResultadoFinal()}`);
        console.log('---------------------------');
    }
}

const a1 = new Aluno(1001, 'Marcio Junior', 7, 8, 6)
const a2 = new Aluno(1002, 'Samuel Rocha', 8, 9, 10)
const a3 = new Aluno(1003, 'José Rocha', 7, 6, 10)
const a4 = new Aluno(1004, 'Malaquias Azevedo', 5, 4, 3)


a1.imprimirDados()
a2.imprimirDados()
a3.imprimirDados()
a4.imprimirDados()

