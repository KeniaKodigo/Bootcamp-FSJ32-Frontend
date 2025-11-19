//Haciendo uso del DOM

//documnet reprsenta el arbol del DOM (devuelve todas las etiquetas HTML de tu documento)
console.log(document)


//Accediendo a los elementos

//accediendo al h1 por ID
let titulo = document.getElementById("title")
console.log(titulo)

//accediendo por etiqueta
let parrafo = document.querySelector('p')

//accediendo por clase
let parrafo2 = document.querySelector('.parrafo')

//arreglo de nodos
let lista_parrafos = document.querySelectorAll(".parrafo")

console.log(parrafo2)
console.log(lista_parrafos)

//accediendo SOLO el contenido (valor) de la etiqueta
let titulo2 = document.getElementById("title")

//textContent sirve para devolver solo el contenido de la etiqueta HTML
console.log(titulo2.textContent)


//Manipulacion del DOM

/*quiero agregar 2 items a la lista del HTML*/

//creando etiquetas de HTML desde Javascript

let item1 = document.createElement('li')
let item2 = document.createElement('li')

//agregando contenido a las etiquetas creadas
item1.textContent = "document.querySelectorAll()";

item2.textContent = "textContent"

console.log(item1)

//agregando los elementos a la lista del HTML

/** llamando a la etiqueta <ul></ul> */
let lista = document.querySelector("ul")
console.log(lista)

//agregando los nuevos li a la lista
lista.appendChild(item1)
lista.appendChild(item2)