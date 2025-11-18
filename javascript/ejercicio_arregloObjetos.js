let empleados = [
    { 
        nombre: "Ana", 
        salario: 800, 
        categoria: "A" 
    },
    { 
        nombre: "Luis", 
        salario: 1000, 
        categoria: "B" 
    },
    { 
        nombre: "Carlos", 
        salario: 750, 
        categoria: "C" 
    },
    { 
        nombre: "María", 
        salario: 1200, 
        categoria: "D" 
    }
];

console.log("*********** Iterando un arreglo con FOR ***********")
//mostrando la info de los empleados con un for
//.length = representa el tamano de tu arreglo
for(let i = 0; i < empleados.length; i++){
    console.log(i)
    //console.log(empleados[i]) -> 500
    console.log(`
        Empleado: ${empleados[i].nombre}
        Salario Actual: $${empleados[i].salario}
        Categoria: ${empleados[i].categoria}
    `)
}

console.log("*********** Iterando un arreglo con FOREACH *********")
//El foreach es un metodo que itera solamente arreglos
empleados.forEach((empleado) => {
    //console.log(empleado)
    console.log(`
        Empleado: ${empleado.nombre}
        Salario Actual: $${empleado.salario}
        Categoria: ${empleado.categoria}
    `)
})


console.log("*********** Iterando un arreglo con MAP *********")
//El map es un metodo que itera cada elemento de un arreglo, podemos hacer copia de dicho arreglo y procesarlo diferente
empleados.map((item) => {
    console.log(`
        Empleado: ${item.nombre}
        Salario Actual: $${item.salario}
        Categoria: ${item.categoria}
    `)
})