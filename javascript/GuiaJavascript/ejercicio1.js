/**
 * Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
 */

function verificarEdad(){
    //convertimos el valor (lo que la persona ingresa) en un dato numerico
    let edad = Number(prompt("Ingresa tu edad"))
    //operador ternario
    
    //validamos que la edad sea numerica, no cadenas
    if(Number.isFinite(edad)){
        let resultado = edad >= 18 ? `Tenes ${edad}, sos mayor de edad` : `Tenes ${edad}, sos menor de edad`

        console.log(resultado)
    }else{
        alert("Ingresa un dato numerico")
    }
}

verificarEdad()