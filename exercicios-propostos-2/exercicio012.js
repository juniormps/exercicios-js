//12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
    let nFatorial = 1
    if (num === 0) {
         return nFatorial
    } else {
        for (let n = 1; n <= num; n++) {
            nFatorial = nFatorial * n
        }
        return nFatorial
    }
}

console.log(fatorial(1))