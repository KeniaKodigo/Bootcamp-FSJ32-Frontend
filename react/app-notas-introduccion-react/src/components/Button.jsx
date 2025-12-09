import React from 'react'

//creando un componente funcional y llamando props (titulo, operacion)
export default function Button({titulo, operacion}) {
    
    return (
        <>
            <h3>{titulo}</h3>
            <button onClick={operacion}>Click Aqui!</button>
        </>
    )
}



