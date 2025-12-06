
export class CabeceraPagina{
    titulo:string
    color:string
    fuente:string
    justificar_titulo:string

    constructor(titulo:string, color:string, fuente:string){
        this.titulo = titulo
        this.color = color
        this.fuente = fuente
        this.justificar_titulo = "Centrado"
    }

    justificarTexto(alinear_titulo:string){
        this.justificar_titulo = alinear_titulo
    }

    mostrarPagina(){
        return `
            Titulo: ${this.titulo}
            Color: ${this.color}
            Fuente: ${this.fuente}
            Justificar Titulo: ${this.justificar_titulo}
        `
    }

}

