
function filtrarYTransformar(arr) {
    // Paso 1: Eliminar negativos
    let positivos = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivos.push(arr[i]);
        }
    }
    
    // Paso 2: Elevar al cuadrado
    let cuadrados = [];
    for (let i = 0; i < positivos.length; i++) {
        cuadrados.push(positivos[i] * positivos[i]);
    }
    
    // Paso 3: Sumar
    let suma = 0;
    for (let i = 0; i < cuadrados.length; i++) {
        suma = suma + cuadrados[i];
    }
    
    return suma;
}

function probarEjercicio4() {
    console.log("=== EJERCICIO 4 ===");
    
    let numeros = [2, -3, 4, -1, 5];
    let resultado = filtrarYTransformar(numeros);
    
    console.log("Array:", numeros);
    console.log("Resultado:", resultado);
    console.log("Explicacion: 2^2 + 4^2 + 5^2 = 4 + 16 + 25 =", resultado);
    
    document.getElementById("resultado4").innerHTML = 
        "Array: " + numeros + "<br>Suma de cuadrados: " + resultado;
}