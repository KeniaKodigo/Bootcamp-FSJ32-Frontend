
// Objetos: es una coleccion de propiedades que describe a algo a alguien
// Las propiedades del objeto se define como (clave-valor)


let fruta = {
    //clave - valor
    nombre: "manzana",
    color: "rojo",
    tipo: "dulce"
}

let persona = {
    nombre: "Juanito", //string
    edad: 30, //int
    profesion: "Programador", //string
    esCasado: true //booleano
}

//accediendo a los elementos del objeto
console.log(fruta)
//con el punto (.) accedemos a una clave del objeto
fruta.color
console.log(`El color de la fruta es ${fruta.color}`)

console.log(`${persona.nombre} es un ${persona.profesion}`)

if(persona.esCasado){
    console.log(`${persona.nombre} esta felizmente casado :)`)
}else{
    console.log(`${persona.nombre} vive la solteria!!`)
}


// Arreglos

let array_frutas = ["🍓", "🍇", "🍉"];

array_frutas.forEach((fruta) => {
    console.log(fruta)
})

let array_notas = [9.8,10,7.5,8]

//accediendo a un elemento en especifico del arreglo (a travez de la posicion)
console.log(array_frutas[2])
console.log(array_frutas[1])
console.log(array_frutas[0])


let edad = 20;

let lista = [23, 67, 90, 100]
lista[0]
lista[1]
lista[2] //90
lista[3]
