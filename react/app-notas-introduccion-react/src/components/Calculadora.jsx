import React from 'react'
import Button from './Button'
import { sumar, restar, multiplicar, dividir } from '../calculadora';

export default function Calculadora() {
    let saludo = "Bienvenido a react";

    return (
        <>
            <h1>Introduccion a React JS</h1>
            <p>{saludo}</p>
            <p>Practica para conocer elementos claves de react</p>
            <ul>
                <li>Virtual DOM</li>
                <li>archivos .jsx</li>
                <li>componentes</li>
                <li>props</li>
            </ul>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>

            <h3>Calculadora - Operaciones Basicas</h3>
            {/** los componentes necesitan apertura y cierre */}
            {/** pasando datos (props) al componente <Button></Button> la idea es utilizar las operaciones basicas */}
            <Button titulo="Suma" operacion={sumar} />
            <Button titulo="Resta" operacion={restar} />
            <Button titulo="Multiplicacion" operacion={multiplicar} ></Button>
            <Button titulo="Division" operacion={dividir} ></Button>
        </>
    )
}
