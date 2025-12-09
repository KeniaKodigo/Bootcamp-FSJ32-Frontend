import React from 'react'
import { multiplicar } from './calculadora'

//creando un componente funcional
export default function Button() {
    
    return (
        <>
            <h3>Calculadora</h3>
            <button onClick={multiplicar}>Click Aqui!</button>
        </>
    )
}



