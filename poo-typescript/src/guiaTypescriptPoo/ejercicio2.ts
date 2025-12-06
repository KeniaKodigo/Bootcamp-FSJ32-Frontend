
export class Calculadora{
    //propiedades
    num1:number
    num2:number

    constructor(a:number, b:number){
        this.num1 = a
        this.num2 = b
    }


    sumar(){
        return this.num1 + this.num2
    }

    restar(){
        return this.num1 - this.num2
    }

    multiplicar(){
        return this.num1 * this.num2
    }

    dividir(a:number, b:number){
        return a / b
    }

    //FALTA EL METODO "potencia" & "factorial"
}