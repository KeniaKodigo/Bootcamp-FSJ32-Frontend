import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineEditNote } from "react-icons/md";
import { useForm } from 'react-hook-form';

export default function FormularioHookNota({listaNotas, setListaNotas}) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    /**
     * register: captura lo que la persona va ingresar en las entradas de datos
     * handleSubmit: es la funcion que permite ejecutar la accion del formulario
     * watch: sirve para testear las entradas de datos / muestra los datos cuando queres utilizar un formulario para editar
     * reset: sirve para limpiar las entradas de datos
     * formState: { errors } -> se utiliza para personalizar los errores de cada entrada de dato
     */

    //observando la entrada de dato "descripcion"
    console.log(watch("descripcion"))


    //funcion para guardar la nota
    const registerNota = (data) => {
        //el paramatro "data" representa un objeto de los datos que ingreso la persona
        console.log(data)

        //actualizar la lista
        setListaNotas([...listaNotas, {
            id: uuidv4(),
            titulo: data.titulo,
            descripcion: data.descripcion
        }])

        //limpia el formulario
        reset()
    }


    return (
        <div>
            <h2>Registro de Notas Diarias</h2>
            <form action="" onSubmit={handleSubmit(registerNota)}>
                <div>
                    <label htmlFor="">Titulo</label>
                    <input type="text" id='titulo'  {...register("titulo", {required: true})} />
                </div>
                {/** validando que el titulo sea requerido */}
                {errors.titulo && <span style={{color: "red"}}>Este campo es requerido</span>}
                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" id='descripcion' {...register("descripcion", {required: true})}  />
                </div>
                {errors.descripcion && <span style={{color: "red"}}>Este campo es requerido</span>}
                <div>
                    <button type='submit'><MdOutlineEditNote />Registrar Nota</button>
                </div>
            </form>
        </div>
    )
}
