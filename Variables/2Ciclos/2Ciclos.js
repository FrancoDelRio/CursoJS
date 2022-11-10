
//El var como no respeta scopes se imprimira 11 ya que es donde el ciclo termina
for (var i=0; i<=10; i++){

}
console.log(i);


//Para evitar que i se quede globalmente con el numero del ciclo se prefiere usar mejor let
for (let i = 0; i<=5; i++){

}
console.log(i);