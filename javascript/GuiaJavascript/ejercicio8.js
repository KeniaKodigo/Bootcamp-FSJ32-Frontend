/**Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario. */

function tablaMultiplicar(){
    let tabla = parseInt(prompt("Ingresa una tabla de multiplicar"))

    for(let i = 1; i <= 10; i++){
        //9 * 1 = 9
        let resultado = tabla * i;
        console.log(`${tabla} * ${i} = ${resultado}`)
    }

}

tablaMultiplicar()