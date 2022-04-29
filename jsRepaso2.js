
function JuegaNumeros (parametro1,parametro2){
    console.log("hola escoje uno de estos dos números que escribiste antes: " + parametro1
    + " o " + parametro2 + " se muestra el primer número que tecleaste: " + parametro1);
    
}

JuegaNumeros(2,4);


alert ("Estoy aprendiendo");


/*mas apuntes*/
/*FUNCIONES RETURN*/
/*Hay funciones que retornan algo y hay otras que no retornan nada

por ejemplo una función que no retorna nada:

function NoRetorna(){
    var hola = 2;
    var chao = 12324;
}

Esta función no retorna nada.


Pero a nivel general la funciones si retornan algo, solo que la diferencia es que 
unas como en el ejemplo anterior no retornan un valor consciso, si no que retornan 
undifined.

   
pero hay otras que si retornan algo. Para retornar un valor puedo usar la palabra
reservar RETURN Por ejemplo:*/

function SiRetorna (){
    return 10;
}

SiRetorna();
/*Que raro, en el código anterior si me ejecutó, y me dió 10, cuando ejecute la función en el
navegador, pero en VisualStudio, no ni en sublime text, usando el navegador, pero
si lo hace en la herramienta de Desarrollador de los navegadores, que raro, OJO. averiguar
despues porque ocurre esto.

en SiRetorna();

Me arrojo un 10

*/

alert("probando");

