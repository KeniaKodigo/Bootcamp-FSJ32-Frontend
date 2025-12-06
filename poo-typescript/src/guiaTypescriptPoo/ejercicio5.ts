
export class Cuenta{
    cantidad:number

    constructor(cantidad:number){
        this.cantidad = cantidad
    }

    depositar(cantidad_a_depositar:number){
        if(cantidad_a_depositar < 5){
            return "Para depositar el monto debe ser mayor a $5.00"
        }else{
            this.cantidad += cantidad_a_depositar
            return `se ha depositado correctamente y la cantidad depositada es ${cantidad_a_depositar}`
        }
    }

    retirar(valor:number){
        if(this.cantidad > 0){
            if(valor > 5 && this.cantidad > valor){
                this.cantidad -= valor
                return `Retiro con exito, te queda de saldo ${this.cantidad}`
            }else{
                return "Fondos insuficientes o el valor a retirar debe ser mayor a $5.00"
            }
        }
    }
}