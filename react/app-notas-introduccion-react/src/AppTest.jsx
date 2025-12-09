import React from 'react'
import Calculadora from './components/Calculadora'
import Encabezado from './components/Encabezado'

export default function AppTest() {
    let frutas = ["🥭", "🍍", "🍎"]
    const gato = {
        nombre: "pancho",
        color: "amarillo",
        edad: 8
    }
    return (
        <>
            {/** <> representa un fragmento de react (contenedor) */}

            {/** utilizamos props para pasar datos, en este caso estamos pasando el nombre de una persona */}
            <Encabezado fullname="Juanito Perez" saludo="Hola soy!" edad={27} lista_frutas={frutas} gato={gato} />
            <Calculadora />
        
        </>
    )
}
