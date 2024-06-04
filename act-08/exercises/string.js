// EJERCICIO A

var texto1 = "hola mundo";
var mayusculas = texto1.toUpperCase();

// EJERCICIO B

var texto2 = "JavaScript";
var primeros5 = texto2.substring(0, 5);

// EJERCICIO C
var texto3 = "JavaScript";
var ultimos3 = texto3.substring(texto3.length - 3);

//EJERCICIO D
var texto4 = "javascript";
var primeraMayuscula = texto4.substring(0, 1).toUpperCase() + texto4.substring(1).toLowerCase();

//EJERCICIO E

var texto5 = "Hola Mundo";
var primerEspacio = texto5.indexOf(" ");

//EJERCICIO F

var texto6 = "javascript python";
var espacioIndex = texto6.indexOf(" ");
var primeraLetraMayuscula = texto6.substring(0, 1).toUpperCase() + texto6.substring(1, espacioIndex).toLowerCase() + " " + texto6.substring(espacioIndex + 1, espacioIndex + 2).toUpperCase() + texto6.substring(espacioIndex + 2).toLowerCase();
