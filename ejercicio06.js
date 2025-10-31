
function probarEjercicio6() {
    console.log("=== EJERCICIO 6 ===");
    
    // Array con nombres repetidos
    let nombres = ["Ana", "Luis", "Carlos", "Ana", "Maria", "Luis", "Pedro"];
    
    console.log("Array original:", nombres);
    
    // Crear Set para eliminar duplicados
    let nombresUnicos = new Set(nombres);
    
    console.log("Set (sin duplicados):", nombresUnicos);
    console.log("Cantidad original:", nombres.length);
    console.log("Cantidad sin duplicados:", nombresUnicos.size);
    
    document.getElementById("resultado6").innerHTML = 
        "Original: " + nombres + "<br>Sin duplicados: " + Array.from(nombresUnicos);
}