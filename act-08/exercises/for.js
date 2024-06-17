// EJERCICIO A
var palabras = ["uno", "dos", "tres", "cuatro", "cinco"];
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

// EJERCICIO B
for (var i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    alert(palabras[i]);
}

// EJERCICIO C
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence);

// EJERCICIO D
var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log(numeros);
