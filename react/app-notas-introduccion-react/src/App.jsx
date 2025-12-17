import { useState } from 'react'
import FormularioNota from './components/FormularioNota'
import ListaNotas from './components/ListaNotas'
import './css/App.css'
import './css/encabezado.css'
import FormularioHookNota from './components/FormularioHookNota'
//import 'bootstrap/dist/css/bootstrap.min.css'

//componente funcional
function App() {
  //creando un estado para la lista de notas
  const [listaNotas, setListaNotas] = useState([]) //objeto de informacion

  return (
      <>
        <h1>Gestion de Notas FSJ32</h1>
        <section>
          {/** pasamos mediante props el estado de la lista de notas */}
          <FormularioHookNota listaNotas={listaNotas} setListaNotas={setListaNotas} />
          <ListaNotas listaNotas={listaNotas} setListaNotas={setListaNotas} />
        </section>
      </>

  )
}

export default App
