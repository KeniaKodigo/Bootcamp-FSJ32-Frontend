/**Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados. //numero < 0
• La cantidad de valores positivos ingresados. //numero > 0
• La cantidad de múltiplos de 15. //numero % 15 === 0
• El valor acumulado de los números ingresados que son pares (suma de pares). //numero % 2 === 0

*/

function cargaValores(){
    let positivos = 0;
    let negativos = 0;
    let multiploQuince = 0;
    let sumaPares = 0;

    //i = iteration
    for(let i = 1; i <= 10; i++){
        let numero = parseInt(prompt(`ingresa numero ${i}`)) //33.4 -> 33
        console.log(numero)
        if(numero > 0){
            positivos++;
        }else{
            negativos++;
        }

        if(numero % 15 === 0){
            multiploQuince++;
        }

        if(numero % 2 === 0){
            sumaPares += numero;
        }
    }

    console.log(`Cantidad de positivos: ${positivos}
    Cantidad de negativos: ${negativos}
    Cantidad de multiplos de 15: ${multiploQuince}
    Suma de pares: ${sumaPares}`)

}

cargaValores()

//12, 67, 10, -8, 12, 3

//sumaPares = 22