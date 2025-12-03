
//declaracion de variables y constantes
let apellido = "Chacon";
const DUI = 1267890;

// definiendo el tipo de dato
export let mensaje:string = "Aprendiendo typescript";
export const PI:number = 3.1416;
export let esEstudiante:boolean = true;
export let dato:null = null;

//definiendo un arreglo
export let frutas:string[] = ["🍓","🍒","🍑","🍍"]
export let notas:number[] = [8,7.5,9,6,10]

//uso de funciones
export function saludar(){
    return "Hola desde typescript! :) "
}

export function sumar(num1:number, num2:number){
    return num1 + num2
}