//Dispositivos - "BREAK / CONTINUE"

//EXEMPLO 01
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}


//EXEMPLO 02
//o dispositivo "CONTINUE" faz com que pule para o próximo item da repetição. No exemplo abaixo, o indice 5 será pulado.
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


//EXEMPLO 03
//ATENÇÃO: ESTA FORMA NÃO É INDICADA USAR.
externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')