//Uso del map

let notas = [5, 6, 9.5, 10, 8];

console.log(`Arreglo Original: ${notas}`)

//iterando las notas
notas.map((item) => {
    console.log(item)
})

console.log("***** Modificando las notas *********")
//iterando y modificando el arreglo (modificar las notas menores a 9, agregandoles un punto)
notas = notas.map((value) => {
    if(value < 9){
        value += 1
    }
    return value
})

//imprimiendo el arreglo
console.log(`Arreglo Modificado: ${notas}`)