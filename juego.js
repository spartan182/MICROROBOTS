
/* Creamos un array bidimensional para los numeros*/
function crearNumeros()
{
  var numeros=
  [ [2,6,5,4,5,5],
    [4,6,6,3,2,6],
    [3,4,1,2,6,3],
    [1,4,2,5,6,1],
    [5,5,3,2,2,1],
    [4,1,4,3,1,3] ];
  return numeros;
}


/*Creamos un array bidimensional para los colores*/
function crearColores()
{
  var colores=["#0000FF","#FFFF00","#FF00FF","#FF0000","#FAFAFA","#01DF01"];
  var colorTablero=
  [ [colores[0],colores[1],colores[2],colores[3],colores[1],colores[0]],
    [colores[0],colores[4],colores[2],colores[3],colores[1],colores[0]],
    [colores[0],colores[1],colores[0],colores[3],colores[3],colores[2]],
    [colores[2],colores[4],colores[2],colores[3],colores[5],colores[3]],
    [colores[5],colores[4],colores[5],colores[5],colores[4],colores[1]],
    [colores[5],colores[4],colores[2],colores[4],colores[5],colores[1]] ];
return colorTablero
}

/*Creamos los console.log para mostrar los colores y los numeros*/
function tablero()
{
  console.log(crearNumeros());
  console.log(crearColores());
}
tablero();




/* EL CODIGO DEL COLOR
Azul     #0000FF
Amarillo #FFFF00
Rosa     #FF00FF
Rojo     #FF0000
Blanco   #FAFAFA
Verde    #01DF01
*/
