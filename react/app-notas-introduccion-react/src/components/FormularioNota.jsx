import React, { useState } from 'react'

export default function FormularioNota() {

    // un estado representa los datos de tu componente y esos datos puedo ir cambiando
    // declaramos un estado y lo inicializamos
    const [inputTitulo, setInputTitulo] = useState("hola") //hook (funcion que sirve para declarar un estado a tu componente)

    /**
     * primer elemento del estado [0] = devuelve el valor iniciado del estado y tambien guarda los cambios
     * segundo elemento del estado [1] = es el encargado de actualizar el estado
     */

    return (
        <div>
            <h2>Registro de Notas Diarias</h2>
            <form action="">
                <div>
                    <label htmlFor="">Titulo</label>
                    <input type="text" id='titulo' value={inputTitulo} />
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" id='descripcion' />
                </div>
                <div>
                    <button type='button'>Registrar Nota</button>
                </div>
            </form>
        </div>
    )
}
