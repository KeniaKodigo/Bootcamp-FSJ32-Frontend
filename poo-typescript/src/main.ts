import './style.css'
//llamando las variables del archivo sitaxis.ts
import { mensaje, PI, frutas, notas, saludar, sumar } from './sintaxis'
import { Libro } from './poo/libro'


console.log(PI)
console.log(frutas)
console.log(notas)
console.log(saludar())
console.log(`La suma es: ${sumar(105, 10)}`)

console.log("---------- POO -------------")
//creando un objeto de la clase Libro (new)
let libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", 210, 60) //instancia
console.log(libro1)

let libro2 = new Libro("Clean Code",  "Robert C", 300, 60) //instancia
console.log(libro2)
console.log(libro2.pasarPagina())
console.log(libro2.verLibro())

let libro3 = new Libro("Juegos del hambre","Maty",340,130)
console.log(libro3)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Introduccion a typescript con POO</h1>
    <p>${mensaje}</p>
  </div>
`

