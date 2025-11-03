
function invertirMap(map) {
    let invertido = new Map();
       map.forEach(function(valor, clave) {
        invertido.set(valor, clave);
    });
      return invertido;
}
function probarEjercicio10() {
    console.log("=== EJERCICIO 10 ===");
    
    let capitales = new Map([
        ["Peru", "Lima"],
        ["Chile", "Santiago"],
        ["Argentina", "Buenos Aires"]
    ]);  
    console.log("Map original:");
    capitales.forEach(function(capital, pais) {
        console.log(pais + " -> " + capital);
    });
    let invertido = invertirMap(capitales);
    
    console.log("\nMap invertido:");
    invertido.forEach(function(pais, capital) {
        console.log(capital + " -> " + pais);
    });
    
    let original = "";
    capitales.forEach(function(capital, pais) {
        original += pais + "→" + capital + " | ";
    });
    
    let inv = "";
    invertido.forEach(function(pais, capital) {
        inv += capital + "→" + pais + " | ";
    });
    
    document.getElementById("resultado10").innerHTML = 
        "Original: " + original + "<br>Invertido: " + inv;
}