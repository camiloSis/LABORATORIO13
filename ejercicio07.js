

function tieneDuplicados(arr) {
    let set = new Set(arr);
    return set.size < arr.length;
}

function probarEjercicio7() {
    console.log("=== EJERCICIO 7 ===");
    
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [1, 2, 3, 2, 4];
    
    console.log("Array 1:", arr1);
    console.log("Tiene duplicados?", tieneDuplicados(arr1));
    
    console.log("Array 2:", arr2);
    console.log("Tiene duplicados?", tieneDuplicados(arr2));
    
    document.getElementById("resultado7").innerHTML = 
        "Array 1: " + arr1 + " → " + (tieneDuplicados(arr1) ? "SI tiene duplicados" : "NO tiene duplicados") +
        "<br>Array 2: " + arr2 + " → " + (tieneDuplicados(arr2) ? "SI tiene duplicados" : "NO tiene duplicados");
}