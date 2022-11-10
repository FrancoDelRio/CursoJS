//let palabra reservada para declarar variables que estan sujetas al scope y no pueden ser redeclaradas 
//Esto para evitar que una palabra se use para variables diferentes "en el mismo scope"
let x;
/*Si no se inicializa una variable let se  */
console.log(x);

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

//const es la palabra reservada para declarar constatnes, osea que nose les cambiara el valor nunca
//*estas variables tienen que ser inicializadas en cuanto se declaran, no se pueden quedar vacias*
const IVA = 16;

//Las constantes respetan el scope lo que significa que pueden volver a ser declaradas en un scope
if (true){
  const IVA = 15.75;
  console.log(IVA);
}

console.log(IVA);

//Tambien se pueden cambiar los elementos dentro de un objeto aunque sea constante
const persona ={
  nombre: "Franco",
  apellido: "del Rio"
}

console.log(persona);

persona.nombre = "Alex";

console.log(persona);