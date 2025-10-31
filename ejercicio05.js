
function reordenarPalabras(oracion) {
    // Paso 1: Separar en palabras
    let palabras = oracion.split(" ");
    
    // Paso 2: Convertir a mayusculas
    let mayusculas = [];
    for (let i = 0; i < palabras.length; i++) {
        mayusculas.push(palabras[i].toUpperCase());
    }
    
    // Paso 3: Ordenar alfabeticamente
    mayusculas.sort();
    
    return mayusculas;
}

function probarEjercicio5() {
    console.log("=== EJERCICIO 5 ===");
    
    let oracion = "sol luna estrella planeta";
    let resultado = reordenarPalabras(oracion);
    
    console.log("Oracion original:", oracion);
    console.log("Resultado:", resultado);
    
    document.getElementById("resultado5").innerHTML = 
        "Original: " + oracion + "<br>Ordenado: " + resultado;
}