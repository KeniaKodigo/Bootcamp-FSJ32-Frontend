import reactLogo from './assets/react.svg'
import './css/App.css'
import Button from './Button';
import { sumar, restar, multiplicar, dividir } from './calculadora';

//componente funcional
function App() {
  let saludo = "Bienvenido a react";


  return (
      <>
         {/** <> representa un fragmento de react (contenedor) */}
        <h1>Introduccion a React JS</h1>
        <p>{saludo}</p>
        <p>Practica para conocer elementos claves de react</p>
        <ul>
          <li>Virtual DOM</li>
          <li>archivos .jsx</li>
          <li>componentes</li>
          <li>props</li>
        </ul>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>

        {/** los componentes necesitan apertura y cierre */}
        <Button />
        <Button />
        <Button></Button>
        <Button></Button>
      </>

  )
}

export default App
