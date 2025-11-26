
//creando la funcion para cambiar el color del titulo
function cambiarColor(){
    //necesitamos acceder al h1
    let title = document.getElementById("title")
    console.log(title)
    title.style.color = "#6459dd"
}


function verAnimacion(){
    //utilizamos la libreria js-confetti
    const  jsConfetti  =  new JSConfetti()
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
    })
}

//obteniendo datos del formulario y devolverlos en una alerta
function enviarDatos(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let lugar = document.getElementById("lugar").value

    /*Swal.fire({
        title: `${nombre} ${apellido}`,
        text: `Tu lugar favorito es ${lugar}`,
        icon: "question"
    });*/

    alert(`
        ${nombre} ${apellido}
        Tu lugar favorito es ${lugar}
    `)
}

function escribir(){
    let lugar = document.getElementById("lugar").value //dato
    console.log(lugar)
}