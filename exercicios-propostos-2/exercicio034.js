//34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function analiseStrings(string1, string2) {
    const palavra1 = string1.toLowerCase().split("").sort()
    const palavra2 = string2.toLowerCase().split("").sort()

    const caracteresSemRepetir1 = [...new Set(palavra1)]  //Elimina os caracteres repetidos do array "palavra1"
    const caracteresSemRepetir2 = [...new Set(palavra2)]  //Elimina os caracteres repetidos do array "palavra2"

    // Verifica se todos os caracteres de caracteresSemRepetir1 estão em caracteresSemRepetir2
    const contemTodosCaracteres = caracteresSemRepetir1.every(c => caracteresSemRepetir2.includes(c))

    // Verifica se todos os caracteres de caractereSemRepetir2 estão em caractereSemRepetir1
    const contemTodosCaracteresInvertido = caracteresSemRepetir2.every(c => caracteresSemRepetir1.includes(c))

    return contemTodosCaracteres && contemTodosCaracteresInvertido

}

console.log(analiseStrings('SAPATO', 'Otapas'))

//Obs.: É NECESSÁRIO realizar as duas verificações "contemTodosCaracteres" e "contemTodosCaracteresInvertido"



// "every()" => Essa função é usada para verificar se todos os elementos de um array atendem a uma determinada condição. No caso, estamos verificando se cada caractere em "caracteresSemRepetir1" está presente em "caracteresSemRepetir2".


// "includes()" => Verifica se um array contém um determinado valor.
