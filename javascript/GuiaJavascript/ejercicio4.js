/** Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.  */

function numeroMayor(){
    let numero1 = Number(prompt("Ingresa el primer numero"))
    let numero2 = Number(prompt("Ingresa el segundo numero"))

    if(numero1 == numero2){
        alert(`Los 2 numeros son iguales`)
    }else if(numero1 > numero2){
        alert(`El numero mayor es el primer numero: ${numero1}`)
    }else{
        alert(`El numero mayor es el segundo numero: ${numero2}`)
    }
}

numeroMayor()