
// Utilizando Programacion Orientada a objetos

// Pilar de la abstraccion: extraemos solo los atributos y metodos que vamos a utilizar
export class Libro{
    //propiedades & metodos
    titulo:string
    autor:string
    numero_paginas:number
    numero_capitulos:number

    //metodo especial: sirve para inicializar tu objeto
    constructor(title:string, autors:string, number_pages:number, number_cap:number){
        this.titulo = title
        this.autor = autors,
        this.numero_paginas = number_pages,
        this.numero_capitulos = number_cap
    }

    //metodos
    pasarPagina(){
        return "Pasando a la siguiente pagina del libro"
    }

    verLibro(){
        return `
            Titulo: ${this.titulo},
            Autor: ${this.autor}
            Numero de Pagina: ${this.numero_paginas},
            Numero de Capitulos: ${this.numero_capitulos}
        `
    }
}