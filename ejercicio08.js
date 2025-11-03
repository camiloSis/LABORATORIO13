

function probarEjercicio8() {
    console.log("=== EJERCICIO 8 ===");
    
    // Map con productos y precios
    let productos = new Map([
        ["manzana", 2.5],
        ["pan", 1.2],
        ["leche", 3.8],
        ["huevos", 4.5]
    ]);
    
    console.log("Productos disponibles:");
    productos.forEach(function(precio, producto) {
        console.log(producto + ": S/. " + precio);
    });
    
    // Lista de compras
    let compras = ["manzana", "pan", "manzana", "leche"];
    
    console.log("\nLista de compras:", compras);
    
    // Calcular total
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        let producto = compras[i];
        let precio = productos.get(producto);
        total = total + precio;
        console.log(producto + ": S/. " + precio);
    }
    
    console.log("\nTOTAL: S/. " + total.toFixed(2));
    
    document.getElementById("resultado8").innerHTML = 
        "Productos: " + Array.from(productos.keys()) + 
        "<br>Compras: " + compras + 
        "<br>Total: S/. " + total.toFixed(2);
}