import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCharacters, getPersonajes } from './dragonaballapi'

function App() {
  //estado para la lista de personajes
  const [characters, setCharacters] = useState([])

  useEffect(() => {
      const fetchCharacters = async () => {
        //const response = await getPersonajes()
        const response = await getCharacters()
        //actualizando el estado de los personajes, accedemos a la propiedad items
        //forma con fetch
        //setCharacters(response.items) //[arreglo de personajes]
        //forma con axios
        setCharacters(response.data.items)
        console.log(response.data.items)
      }

      fetchCharacters()
  }, [])


  return (
    <>
      <h1>Practica API DRAGON BALL</h1>
      {
        //iterando el estado de los personajes
        characters.map((personaje) => {
          return (
            <div key={personaje.id}>
              <h3>{personaje.name}</h3>
              <img src={personaje.image} alt="dragonball" style={{width: "30%"}} />

              <div>
                <p>Genero: {personaje.gender}</p>
                <p>KI: {personaje.ki}</p>
              </div>
            </div>
          )
        })
      } 
    </>
  )
}

export default App
