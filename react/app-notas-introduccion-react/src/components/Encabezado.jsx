import React from 'react'

export default function Encabezado({fullname, saludo, edad, lista_frutas, gato}) {
    console.log(lista_frutas)
    console.log(gato)

    return (
        <header>
            <h1 className="title-header">LISTA DE NOTAS - FSJ32</h1>
            <p className='paragrahp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, excepturi molestias consequatur sequi impedit esse.</p>
            <h4>Bienvenido/a {fullname} 😎</h4>
            <h5>{saludo} {fullname} y tengo {edad} años de edad🤗</h5>
        </header>
    )
}
