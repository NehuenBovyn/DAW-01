// EJERCICIO A
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4], meses[10]);

// EJERCICIO B
meses.sort();
console.log(meses);

// EJERCICIO C
meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

// EJERCICIO D
meses.shift();
meses.pop();
console.log(meses);

// EJERCICIO E
meses.reverse();
console.log(meses);

// EJERCICIO F
var mesesString = meses.join("-");
console.log(mesesString);

// EJERCICIO G
var mesesCopia = meses.slice(4, 11);
console.log(mesesCopia);
