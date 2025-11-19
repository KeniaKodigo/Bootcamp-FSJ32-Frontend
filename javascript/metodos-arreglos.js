//Foreach: Sirve para recorrer cada elemento y hacer algo, pero no devuelve un nuevo arreglo.

let array_frutas = ["🍓", "🍇", "🍎","🍐"];

array_frutas.forEach((fruta) => {
    console.log(fruta)
})


//Map: Sirve cuando quieres modificar cada elemento y crear una nueva caja con el resultado.
/**
 * Devuelve un nuevo arreglo
 * No modifica el original
 * Sirve para transformar datos
 */

let array_verduras = ["🥑", "🥦","🥔"];

const verdura_stickers = array_verduras.map((verdura) => {
    return `${verdura} 🎉`
})
console.log(array_verduras)
console.log(verdura_stickers)

let frutas = ["🍓","🍉","🍇"]
let frutas_clon = []
console.log(frutas_clon)

//iterar los elementos con map
frutas_clon = frutas.map((item) => {
    return item
})
//frutas_clon = ["🍓","🍉","🍇"]
console.log(frutas_clon)

frutas_clon = frutas_clon.map((item) => {
    return `${item}*`
})

//frutas_clon = ["🍓*","🍉*","🍇*"]
console.log(frutas_clon)