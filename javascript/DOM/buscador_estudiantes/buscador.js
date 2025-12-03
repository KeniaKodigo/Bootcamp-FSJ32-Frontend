//arreglo de objetos
const estudiantes = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Carlos", edad: 22 },
    { nombre: "María", edad: 19 },
    { nombre: "Pedro", edad: 23 },
    { nombre: "Lucía", edad: 21 }
];


//acceder a los elementos que necesitamos
let resultado = document.getElementById("resultados")
//elemento donde la persona va ingresar el nombre del estudiante
let entrada_texto = document.getElementById("buscador")


function buscarEstudiante(){
    // for(let i=0; i < estudiantes.length; i++){
    //     //console.log(estudiantes[i].edad)
    //     if(estudiantes[i].edad >= 21){
    //         console.log(estudiantes[i].nombre)
    //     }
    // }

    //let estudiantes_filtrados = estudiantes.filter((estudiante) => estudiante.nombre == entrada_texto.value)

    let estudiantes_filtrados = estudiantes.filter((estudiante) => estudiante.nombre.toLowerCase().includes(entrada_texto.value))

    //filter() => filtrar arreglos  ([])
    //includes() => verificar si el texto esta dentro de la cadena (true/false)

    //limpiando el contenedor
    resultado.innerHTML = ""

    //verificando si el arreglo tiene datos o no
    if(estudiantes_filtrados.length == 0){
        resultado.textContent = "No se encontro ningun estudiante con ese nombre"
    }

    //iterando los estudiantes filtrados para mostrarlos en el HTML
    estudiantes_filtrados.map((estudiante) => {
        resultado.innerHTML += `
            <p><strong>${estudiante.nombre}</strong> - Edad: ${estudiante.edad} </p>
        `
    })

}