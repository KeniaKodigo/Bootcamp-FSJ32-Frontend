
class Persona{
    public nombre:string
    public apellido:string
    protected direccion:string
    protected telefono:number
    public edad:number

    constructor(nombre:string, apellido:string, direccion:string, tel:number, edad:number){
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.telefono = tel
        this.edad = edad
    }

    mostrarInformacion(){
        return `
            Datos Personales
                Nombre: ${this.nombre} ${this.apellido}
                Direccion: ${this.direccion}
                Telefono: ${this.telefono}
                Edad: ${this.edad}
        `
    }
}

// Heredando la clase Persona
export class Empleado extends Persona{
    private sueldo:number

    //modificando el constructor para agregar el sueldo del empleado
    constructor(nombre:string, apellido:string, direccion:string, tel:number, edad:number, sueldo:number){
        //llamando el constructor padre
        super(nombre, apellido, direccion, tel, edad)
        this.sueldo = sueldo
    }

    getSueldo(){
        return this.sueldo
    }

    setSueldo(sueldo:number){
        this.sueldo = sueldo
    }

    mayorEdad(){
        if(this.edad >= 18){
            return "Sos mayor de edad :)"
        }else{
            return "Sos menor de edad :("
        }
    }

    //utilizando polimorfismo: llamamos el metodo de la clase Padre pero le cambiamos el comportamiento
    mostrarInformacion(): string {
        return `
            Datos del Empleado 🎯
                Nombre: ${this.nombre} ${this.apellido}
                Direccion: ${this.direccion}
                Telefono: ${this.telefono}
                Edad: ${this.edad}
                Salario: $${this.getSueldo()} ✏
        `
    }
}