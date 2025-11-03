
function contarLetras(texto) {
    // Convertir a minusculas
    texto = texto.toLowerCase();
    
    let contador = {};
    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        
        if (contador[letra]) {
            contador[letra]++;
        } else {
            contador[letra] = 1;
        }
    }
    
    return contador;
}

function probarEjercicio12() {
    console.log("=== EJERCICIO 12 ===");
    
    let texto = "banana";
    let resultado = contarLetras(texto);
    
    console.log("Texto:", texto);
    console.log("Conteo de letras:", resultado);
    
    let salida = "";
    for (let letra in resultado) {
        salida += letra + ":" + resultado[letra] + " ";
    }
    
    document.getElementById("resultado12").innerHTML = 
        "Texto: " + texto + "<br>Conteo: " + salida;
}