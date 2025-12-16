import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineEditNote } from "react-icons/md";

// capturando los datos compartidos ({listaNotas, setListaNotas})
export default function FormularioNota({listaNotas, setListaNotas}) {

    // un estado representa los datos de tu componente y esos datos puedo ir cambiando
    // declaramos un estado y lo inicializamos
    const [inputTitulo, setInputTitulo] = useState("") //hook (funcion que sirve para declarar un estado a tu componente)
    const [inputDescripcion, setInputDescripcion] = useState("")
    /**
     * primer elemento del estado [0] = devuelve el valor iniciado del estado y tambien guarda los cambios
     * segundo elemento del estado [1] = es el encargado de actualizar el estado
     */

    //creando funciones para capturar las entradas de datos
    const handleInputTitulo = (e) => {
        //actualizamos el estado del titulo
        setInputTitulo(e.target.value)
    }

    const handleInputDescripcion = (e) => {
        //actualizamos el estado del titulo
        setInputDescripcion(e.target.value)
    }

    //funcion para guardar la nota
    const handleSubmit = () => {
        //actualizar la lista
        setListaNotas([...listaNotas, {
            id: uuidv4(),
            titulo: inputTitulo,
            descripcion: inputDescripcion
        }])

        //limpiamos las entradas de datos
        setInputTitulo("")
        setInputDescripcion("")
    }

    return (
        <div>
            <h2>Registro de Notas Diarias</h2>
            <form action="">
                <div>
                    <label htmlFor="">Titulo</label>
                    <input type="text" id='titulo' value={inputTitulo} onChange={(e) => handleInputTitulo(e)} />
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" id='descripcion' value={inputDescripcion} onChange={(e) => handleInputDescripcion(e)} />
                </div>
                <div>
                    <button onClick={handleSubmit} type='button'><MdOutlineEditNote />Registrar Nota</button>
                </div>
            </form>
        </div>
    )
}
