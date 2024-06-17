// EJERCICIO A
function suma(num1, num2) {
  return num1 + num2;
}
var resultadoSuma = suma(5, 10);
console.log(resultadoSuma);

// EJERCICIO B
function sumaConValidacion(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
      alert("Uno de los parámetros no es un número.");
      return NaN;
  }
  return num1 + num2;
}

// EJERCICIO C
function validateInteger(number) {
  return Number.isInteger(number);
}

// EJERCICIO D
function sumaConValidacionEnteros(num1, num2) {
  if (!validateInteger(num1) || !validateInteger(num2)) {
      alert("Uno de los números no es entero.");
      return Math.round(num1) + Math.round(num2);
  }
  return num1 + num2;
}
