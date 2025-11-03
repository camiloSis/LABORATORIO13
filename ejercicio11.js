
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detalles: function() {
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año;
    }
};

function probarEjercicio11() {
    console.log("=== EJERCICIO 11 ===");
    
    console.log("Objeto auto:");
    console.log("Marca:", auto.marca);
    console.log("Modelo:", auto.modelo);
    console.log("Año:", auto.año);
    console.log("\nDetalles:", auto.detalles());
    
    document.getElementById("resultado11").innerHTML = auto.detalles();
}