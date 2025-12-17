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
                //operador ternario => condicion (equivale a un if/else) ?/:
                //iterando el arreglo de notas
                listaNotas.length == 0 ?  <h3>No hay Notas...</h3>  : (
                    //si el arreglo no esta vacio, mapeamos las notas
                    listaNotas.map((nota, indice) => {
                        console.log(nota)
                        return (
                            <div className='container-nota' key={indice}>
                                <h4>{nota.titulo}</h4>
                                <p>{nota.descripcion}</p>
                                <button onClick={() => eliminarNota(nota.id)}><FaTrashAlt /></button>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}
