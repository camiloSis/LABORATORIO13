function contarPalabras(texto) {
    // Convertir a minusculas
    texto = texto.toLowerCase();  
    // Separar en palabras
    let palabras = texto.split(" ");
    
    // Crear Map para contar
    let contador = new Map(); 
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        
        if (contador.has(palabra)) {
            let cantidad = contador.get(palabra);
            contador.set(palabra, cantidad + 1);
        } else {
            contador.set(palabra, 1);
        }
    }
    return contador;
}

function probarEjercicio9() {
    console.log("=== EJERCICIO 9 ===");
    let texto = "sol luna sol sol estrella luna";
    let resultado = contarPalabras(texto);
    
    console.log("Texto:", texto);
    console.log("Conteo de palabras:");
    resultado.forEach(function(cantidad, palabra) {
        console.log(palabra + ": " + cantidad);
    });
    
    let salida = "";
    resultado.forEach(function(cantidad, palabra) {
        salida += palabra + ": " + cantidad + ", ";
    });
    
    document.getElementById("resultado9").innerHTML = 
        "Texto: " + texto + "<br>Conteo: " + salida;
}