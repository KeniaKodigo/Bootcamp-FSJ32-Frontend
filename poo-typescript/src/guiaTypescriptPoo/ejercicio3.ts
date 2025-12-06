/**
 * encapsulamiento
 * modificadores de acceso: public, protected (se usa cuando hay herencia), private (solo se accede dentro de la clase)
 */
export class Cancion{
    public titulo:string
    public genero:string
    //existen 2 metodos especiales para atributos privado (get/set)
    private autor:string

    constructor(titulo_param:string, genero_param:string){
        this.titulo = titulo_param
        this.genero = genero_param
        this.autor = "anonimo"
    }

    //metodo que devuelve al autor
    getAutor(){
        return this.autor
    }

    //metodo que permite actualizar el valor del atributo (necesitamos un parametro)
    setAutor(autor_param:string){
        this.autor = autor_param
    }

    mostrarCancion(){
        return `
            Cancion: ${this.titulo},
            Genero: ${this.genero},
            Autor: ${this.getAutor()}
        `
    }
}