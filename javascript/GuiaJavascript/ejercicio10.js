/**Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana. 
• Las edades de 6 estudiantes del turno tarde. 
• Las edades de 11 estudiantes del turno noche. 
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor. */

function promedioTurnos(){
    let sumar_amanecer = 0
    let sumar_Tarde = 0
    let sumar_Noche = 0

    for(let i = 1; i <= 5; i++){
        let EdadM = parseInt(prompt(`ingresa las edades del turno de amanecer ${i}`))
        console.log(EdadM)
        sumar_amanecer += EdadM;

    }

    for(let j = 1; j <= 6; j++){
        let EdadT = parseInt(prompt(`ingresa las edades del turno de Tarde `))
        console.log(EdadT)
        sumar_Tarde += EdadT;
    }

    for(let k = 1; k <= 11; k++){
        let EdadN = parseInt(prompt(`ingresa las edades del turno de Noche ${k}`))
        console.log(EdadN)
        sumar_Noche += EdadN;
    }

    //sacar el promedio total de cada turno
    let promediom = sumar_amanecer / 5;
    let promediot = sumar_Tarde  / 6;
    let promediok = sumar_Noche / 11;

    console.log(`Informacion de los promedios por turno
            Turno Manana: ${promediom}
            Turno Tarde: ${promediot}
            Turno Noche: ${promediok}`)

    //AND (&&) OR (||) -> (true/false)
    //12, 15, 15
    if(promediom  > promediot && promediom > promediok){
        console.log("El turno de la manana es el mayor")
    }else if(promediot  > promediom && promediot > promediok){
        console.log("El turno de la tarde es el mayor")
    }else if(promediok > promediom && promediok > promediot){
        console.log("El turno de la noche es el mayor")
    }else{
        console.log("Hay turnos que tienen el mismo promedio")
        // if(promediot == promediom){
        //     if(promediot == promediok){
        //         console.log("Los 3 turnos son iguales")
        //     }else{
        //         console.log("Los turnos de la tarde y manana son iguales")
        //     }
        // }
    }
}

promedioTurnos()


