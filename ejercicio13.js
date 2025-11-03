function combinarCatalogos(tiendaA, tiendaB) {
    let catalogo = {};
for (let producto in tiendaA) {
        catalogo[producto] = tiendaA[producto];
    }
for (let producto in tiendaB) {
        if (catalogo[producto]) {
            if (tiendaB[producto] < catalogo[producto]) {
                catalogo[producto] = tiendaB[producto];
            }
        } else {
            catalogo[producto] = tiendaB[producto];
        }
    }
    for (let producto in catalogo) {
        catalogo[producto] = parseFloat(catalogo[producto].toFixed(2));
    }
    return catalogo;
}
function probarEjercicio13() {
    console.log("=== EJERCICIO 13 ===");
    let tiendaA = {
        laptop: 3500.5,
        mouse: 100.35,
        teclado: 250.9
    };
    let tiendaB = {
        mouse: 95.2,
        monitor: 720.457,
        teclado: 260.1
    };
    console.log("Tienda A:", tiendaA);
    console.log("Tienda B:", tiendaB);
    let resultado = combinarCatalogos(tiendaA, tiendaB); 
    console.log("\nCatalogo combinado:", resultado); 
    let salida = "";
    for (let producto in resultado) {
        salida += producto + ": S/. " + resultado[producto] + "<br>";
    } 
    document.getElementById("resultado13").innerHTML = 
        "<strong>Catalogo Combinado:</strong><br>" + salida;
}