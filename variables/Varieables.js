//let palabra reservada para declarar variables que estan sujetas al scope y no pueden ser redeclaradas 
//Esto para evitar que una palabra se use para variables diferentes "en el mismo scope"
let variable = "hola mundo";

console.log(variable);

let numero = 5;

if (numero === 5){
  let numero = 6;
  //console.log(numero);
}

numero = 8;
//console.log(numero);


//var es la palabra clave que no esta sujeta a scopes como tal y puede ser redeclarada las veces que quieras
var variableVar = "Adios";

if (true){
  var variableVar ="Hasta luego";
}

console.log(variableVar);

