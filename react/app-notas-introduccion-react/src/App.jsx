import { useState } from 'react'
import FormularioNota from './components/FormularioNota'
import ListaNotas from './components/ListaNotas'
import './css/App.css'
import './css/encabezado.css'

//componente funcional
function App() {
  //creando un estado para la lista de notas
  const [listaNotas, setListaNotas] = useState([])

  return (
      <>
        <h1>Gestion de Notas FSJ32</h1>
        <section>
          {/** pasamos mediante props el estado de la lista de notas */}
          <FormularioNota listaNotas={listaNotas} setListaNotas={setListaNotas} />
          <ListaNotas />
        </section>
      </>

  )
}

export default App
