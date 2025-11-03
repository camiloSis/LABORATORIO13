
function gestionarEmpleados(empleados) {
    let areas = {};  
    for (let i = 0; i < empleados.length; i++) {
        let empleado = empleados[i];
        let area = empleado.area;

        if (!areas[area]) {
            areas[area] = {
                empleados: [],
                promedio: 0
            };
        }
        areas[area].empleados.push(empleado.nombre);
    }
    for (let area in areas) {
        let suma = 0;
        let cantidad = 0;
        
        for (let i = 0; i < empleados.length; i++) {
            if (empleados[i].area === area) {
                suma = suma + empleados[i].salario;
                cantidad++;
            }
        }
        
        areas[area].promedio = suma / cantidad;
    }
    
    return areas;
}

function probarEjercicio14() {
    console.log("=== EJERCICIO 14 ===");
    
    let listaEmpleados = [
        { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
        { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
        { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
        { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
    ];
    
    console.log("Lista de empleados:");
    console.log(listaEmpleados);
    
    let resultado = gestionarEmpleados(listaEmpleados);
    
    console.log("\nGestion por areas:");
    console.log(resultado);
    
    let salida = "";
    for (let area in resultado) {
        salida += "<strong>" + area + ":</strong><br>";
        salida += "Empleados: " + resultado[area].empleados.join(", ") + "<br>";
        salida += "Salario promedio: S/. " + resultado[area].promedio + "<br><br>";
    }
    
    document.getElementById("resultado14").innerHTML = salida;
}
