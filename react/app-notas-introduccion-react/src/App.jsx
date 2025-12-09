import FormularioNota from './components/FormularioNota'
import './css/App.css'
import './css/encabezado.css'

//componente funcional
function App() {
  
  return (
      <>
        <h1>Gestion de Notas FSJ32</h1>
        <section>
          <FormularioNota />
        </section>
      </>

  )
}

export default App
