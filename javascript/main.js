
console.log("Hola desde un archivo de Javascript externo");

// comentario en una linea
/* comentario mas largo
    ....
*/

// declaracion de variables
let nombre = "Juan"
var nombre2 = "Sara" //forma antigua

console.log(nombre)

// constantes
const PI = 3.1416;
console.log(PI);

// Tipos de datos
let apellido = "Perez"; //string
let edad = 25; //int
let decimal = 1.56; //double o float
let esEmpleado = true; //booleano
let esCasado = false; //booleano
//null vs undefined
let manzana = null; //declaramos a proposito que la variable esta vacia
console.log(manzana)
manzana = "🍎"; //string
console.log(manzana); 

let pera; //undefined
console.log(pera)
pera = "🍐"; //string
console.log(pera)
//devolviendo el tipo de dato de una variable
console.log(typeof esEmpleado)
console.log(typeof manzana)
console.log(typeof decimal)
console.log(typeof edad)

//operaciones aritmeticas
let a = 10;
let b = 3;

console.log("********** Operaciones Aritmeticas ************")

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(Math.pow(a, b)) // a ** b

console.log("********** Operaciones de Comparacion ************")

let x = 10;
let y = "10";

console.log(x == y); //comparamos si las 2 variables tienen el mismo valor

console.log(x === y); //comparamos si las 2 variables tienen el mismo valor & EL MISMO TIPO DE DATO

console.log(10 > 4); //mayor que
console.log(10 >= 4); //mayor o igual que
console.log(10 < 4); //menor que
console.log(10 <= 4); //menor o igual que