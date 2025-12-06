import './style.css'
//llamando las variables del archivo sitaxis.ts
import { mensaje, PI, frutas, notas, saludar, sumar } from './sintaxis'
import { Libro } from './poo/libro'
import { CabeceraPagina } from './guiaTypescriptPoo/ejercicio1'
import { Cancion } from './guiaTypescriptPoo/ejercicio3'
import { Empleado } from './guiaTypescriptPoo/ejercicio4'
import { Calculadora } from './guiaTypescriptPoo/ejercicio2'
import { Cuenta } from './guiaTypescriptPoo/ejercicio5'


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

console.log("---------- Guia de Ejercicios -------------")
let objeto1 = new CabeceraPagina("Introduccion a POO","red","Calibri")
objeto1.titulo = "hshnjd";
objeto1.justificarTexto("izquierda")
console.log(objeto1.mostrarPagina())

let cancio1 = new Cancion("Thriller", "Pop")
cancio1.setAutor("Michael Jackson")
console.log(cancio1.mostrarCancion())

console.log(`Autor de la cancion: ${cancio1.getAutor()}`)

let empleado1 = new Empleado("Juan","Perez","Chalatenango, San Ignacio",6789054, 20, 560)
console.log(empleado1.mayorEdad())
console.log(empleado1.mostrarInformacion())

let calculadora = new Calculadora(23, 67)
console.log(`Suma: ${calculadora.sumar()}`)
console.log(`Restar: ${calculadora.restar()}`)
console.log(`Multiplicar: ${calculadora.multiplicar()}`)
console.log(`Dividir: ${calculadora.dividir(10, 5)}`)

let cuenta = new Cuenta(10)
cuenta.depositar(100)
console.log(cuenta)

console.log(cuenta.retirar(4))
console.log(cuenta.retirar(200))
console.log(cuenta.retirar(60))
cuenta.depositar(20)
console.log(cuenta)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Introduccion a typescript con POO</h1>
    <p>${mensaje}</p>
  </div>
`

