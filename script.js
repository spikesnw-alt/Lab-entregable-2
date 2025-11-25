// Declaramos dos números
let num1 = 10;
let num2 = 5;

// Declaramos la operación (puede ser: "suma", "resta", "multiplicacion", "division")
let operacion = "suma";

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        // Validación de división por cero
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida";
    }
}

let continuar = true;

while (continuar) {
    // Pedimos datos al usuario
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Nos vemos pronto!");
        continuar = false;
    } else {
        let resultado = realizarOperacion(num1, num2, operacion);
        alert("Resultado: " + resultado);
    }
}

