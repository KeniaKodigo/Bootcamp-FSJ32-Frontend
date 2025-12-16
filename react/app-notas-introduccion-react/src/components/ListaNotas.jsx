import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


export default function ListaNotas({listaNotas, setListaNotas }) {
    console.log(listaNotas)
    //creando una funcion para eliminar una nota
    const eliminarNota = (idNota) => {
        //actualizamos el estado con notas filtradas (mandamos las notas que sean diferente a la nota que selecciono el usuari)
        setListaNotas(listaNotas.filter((nota) => nota.id !== idNota))
    }

    return (
        <div>
            <h2>Lista de Notas</h2>
            {
                //iterando el arreglo de notas
                listaNotas.map((nota, indice) => {
                    console.log(nota)
                    return (
                        <div className='container-nota' key={indice}>
                            <h3>{nota.titulo}</h3>
                            <p>{nota.descripcion}</p>
                            <button onClick={() => eliminarNota(nota.id)}><FaTrashAlt /></button>
                        </div>
                    )
                })
            }
        </div>
    )
}
