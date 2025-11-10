/**CATEGORIA AUMENTO
    A 15% 
    B 30% 
    C 10%
    D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
 */

function calcularAumento(nombre, salario, categoria){
    let aumento_salarial = 0;
    let salario_neto = 0;

    switch(categoria){
        case "A":
            aumento_salarial = salario * 0.15; //90
            salario_neto = salario + aumento_salarial;

            console.log(`Informacion del empleado:
                    Empleado: ${nombre},
                    Categoria: ${categoria},
                    Aumento Salarial: ${aumento_salarial},
                    Sueldo Anterior: $${salario}
                    Sueldo Neto: $${salario_neto}`)
            break;

        case "B":
            break;

        case "C":
            break;

        case "D":
            break;

        default:
            console.log("Ingresa una categoria entre: A,B,C,D")
    }

}

calcularAumento("Kenia",600,"A")