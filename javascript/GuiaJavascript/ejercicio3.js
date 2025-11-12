/**CATEGORIA AUMENTO
    A 15% 
    B 30% 
    C 10%
    D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
 */
//scope = (alcance)

function calcularAumento(nombre, salario, categoria){
    let aumento_salarial = 0;
    let salario_neto = 0;

    switch(categoria){
        case "A":
            aumento_salarial = salario * 0.15; 
            salario_neto = salario + aumento_salarial;
            break;

        case "B":
            aumento_salarial = salario * 0.30; 
            salario_neto = salario + aumento_salarial;

            break;

        case "C":
            aumento_salarial = salario * 0.10; 
            salario_neto = salario + aumento_salarial;

            break;

        case "D":
            aumento_salarial = salario * 0.20; 
            salario_neto = salario + aumento_salarial;

            break;

        default:
            console.log("Ingresa una categoria entre: A,B,C,D")
    }

    console.log(`Informacion del empleado:
                    Empleado: ${nombre},
                    Categoria: ${categoria},
                    Aumento Salarial: ${aumento_salarial},
                    Sueldo Anterior: $${salario}
                    Sueldo Neto: $${salario_neto}`)

}

calcularAumento("Kenia",600,"A")
calcularAumento("Juan",700,"B")
calcularAumento("Sara",550,"D")