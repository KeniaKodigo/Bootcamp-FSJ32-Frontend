import './style.css'
//llamando las variables del archivo sitaxis.ts
import { mensaje, PI, frutas, notas, saludar, sumar } from './sintaxis'


console.log(PI)
console.log(frutas)
console.log(notas)
console.log(saludar())
console.log(`La suma es: ${sumar(105, 10)}`)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Introduccion a typescript con POO</h1>
    <p>${mensaje}</p>
  </div>
`

