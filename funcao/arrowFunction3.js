//ARROW FUNCTION 03

//"this" e "arrow function"


let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const objeto = {}
comparaComThis = comparaComThis.bind(objeto)

comparaComThis(global)
comparaComThis(objeto)


let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(objeto)
comparaComThisArrow(objeto)
comparaComThisArrow(module.exports)




