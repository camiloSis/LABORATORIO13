

function doblarNumeros(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * 2);
    }
    return resultado;
}

function probarEjercicio3() {
    console.log("=== EJERCICIO 3 ===");
    
    let numeros = [1, 2, 3, 4, 5];
    let duplicados = doblarNumeros(numeros);
    
    console.log("Array original:", numeros);
    console.log("Array duplicado:", duplicados);
    
    document.getElementById("resultado3").innerHTML = 
        "Original: " + numeros + "<br>Duplicado: " + duplicados;
}