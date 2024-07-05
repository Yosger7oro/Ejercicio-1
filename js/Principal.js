/*1. En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
Ej.
Costos varios artículos: 10, 20, 14, 6 y 4
Salida: 
La ganancia será de Bs.27 */
import CL_Articulos from "./CL_Articulos.js"
import CL_Bodega from "./CL_Bodega.js"

let artic1= new CL_Articulos(10);
let artic2= new CL_Articulos(20);
let artic3= new CL_Articulos(14);
let artic4= new CL_Articulos(6);
let artic5= new CL_Articulos(4);

let bodega= new CL_Bodega();

bodega.procesararticulos(artic1);
bodega.procesararticulos(artic2);
bodega.procesararticulos(artic3);
bodega.procesararticulos(artic4);
bodega.procesararticulos(artic5);

let salida=document.getElementById("salida");

salida.innerHTML= "Resultados"
salida.innerHTML+="<br> Los ganacias por todos los articulos es de: "+bodega.precioportodo();
