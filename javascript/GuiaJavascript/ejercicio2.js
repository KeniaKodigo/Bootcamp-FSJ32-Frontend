/**Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

function calcularNota(nombre, carnet, nota_examen, nota_tarea, nota_asistencia, nota_investigacion){

    const EXAMEN = 0.2;
    const TAREAS = 0.40;
    const ASISTENCIA = 0.10;
    const INVESTIGACION = 0.30;

    /*let promedio_examen = nota_examen * EXAMEN;
    let promedio_tarea = nota_tarea * TAREAS;
    let promedio_asistencia = nota_asistencia * ASISTENCIA;
    let promedio_investigacion = nota_investigacion * INVESTIGACION;

    let promedio_final = promedio_examen + promedio_tarea + promedio_asistencia + promedio_investigacion;*/

    let promedio_final = (nota_examen * EXAMEN) + (nota_tarea * TAREAS) + (nota_asistencia * ASISTENCIA) + (nota_investigacion * INVESTIGACION);
    
    console.log(` Informacion del Estudiante
        Estudiante: ${nombre},
        Carnet: ${carnet},
        Promedio Final: ${promedio_final}`);

}

calcularNota("Mateo", "KM2-25", 10, 8, 10, 7); 
calcularNota("Juan Perez", "JP2024", 8.5, 8, 10, 9.2);