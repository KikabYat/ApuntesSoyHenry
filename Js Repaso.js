/* FUNCIONES, sirven para agrupar codigo que voy a usarlo muchas veces, 
para no estar codeando varias veces un mismo bloque de código.

Funciones, primero va el nombre de la función, luego va los argumentos
entre parentesis, los árgumentos vienen siendo como las variables que va a recibir
es decir, que se van a manejar en la función, en este caso, las variables 
que se van a manejar en este ejercicio, son los siguientes: Nombre y Edad, por lo que
estas dos variables, van a venir siendo los árgumentos de dicha funcion, que van 
a ser los datos que va a recibir. Entre las llaves, va el código a ejecutar por dicha
función, utilizando los árgumentos que se le han pasado. */
function TranscribeNombreEdad (nombre, edad){
    console.log("Hola mi nombre es:" + nombre);
    console.log("Hola tengo" + edad + "años");
}
/*Aca ya hemos completado la función, y entonces prosigue e invocarla, escribiendo de esta forma
NombredeLaFuncion(aca van dos datos correspondientes a cada árgumento, separados por comas, en este
caso, como ya estaban esquematizados anteriormente, primero el dato de Nombre, y luego el 
dato de Edad, Separados por comas, vamos a pasarle los datos:) */
TranscribeNombreEdad("Kikab", "32");

/*Hay tres tipos de funciones*/
/*
1. function miFuncion (){
    aca va el bloque de código
} 

----------------------------
2. const miFuncion = function (){
    aca va el bloque de código
};

----------------------------

3. const miFuncion = () => {
    aca va el bloque de código
}
-------------------------------

En la modalidad de la función en el numero
2 notece que no hay nombre de Funcion, aqui los datos son alojados dentro 
de la variable miFuncion.
*/


TranscribeNombreEdad();
/*aqui en el código anterior, cuando la funcion se programo con parámetros
y luego al invocar la función, se invoca sin parámetros, da como resultado cuando se 
ejecuta dicha función, UN undifined por cada parámetro que no se llenó, y que 
estaba programado para llenarse en la creación de la función 

Hola mi nombre es:undefined
Hola tengo undefined años
*/

function saluda( ){
    console.log("Hola que tal");
    console.log("Qué hacés?");

}
/* Aquí tenemos otro ejemplo de una función, cuando se realizó la función anterior
saluda, se programo para no pasarle parámetros, es decir, no se le puso parámetros,
el parántesis está vacío, por lo tanto, cuando se invoca la función como se muestra
abajo de éste texto, sin parámetros: Ejecuta el código que está adrentro de la función que 
fue creada, y si se le pone parámetros al momento de invocar la misma, como en la segunda
línea: saluda(12,4);: acá no pasa nada, el resultado es el mismo como el anterior, cuando se invocó
la función sin parámetros. Esto pasa, porque la función se creó originalmente
sin parámetros, y aunque se le pongan parámetros en el momento de la invocación
de la función esta no va a tomar en cuenta los parámetros.

saluda();
saluda(12,4);

Ambas van a dar el mismo resultado:

Hola que tal
Qué hacés?

*/

saluda();
saluda(12,4);


/*ARGUMENTOS */

/*Cuando se declara uno o dos o mas argumentos dentro del paréntesis, es como si se declarara
una variable en el bloque de código que esta dentro de las llaves.

Aún no tiene un valor, pero cuando alguien INVOQUE a la función, ahi en ese momento
le va a dar un valor*/



function sumatorio(numero1, numero2){

    console.log(numero1+numero2);
}

sumatorio(1,2);

/*Aquí en el código de arriba, se muestra una función que cuando se crea se le pasan
dos parámetros, numero1 y numero2.
Luego en el bloque de código, que va a ser el código que se ejecute cuando se invoque
la función, esta un console.log que muestra la suma de estas dos variables o parámetros
en este caso, cuando se invoca la función, se le tienen que introducir dos parámetros, en este 
caso cuando se invocó se le introdujo de parámetros los números 1 y 2. */



/*LOS SCOPE */
/*Los scope vienen siendo como espacios de bloques de código, por ejemplo: */


function divide(a,b){
//este espacio es un Scope (propio de la función divide)
    console.log(a/b);
}

divide(10,5);

/*En la siguiente línea de código: 

    console.log(a)

da como resultado:

    ReferenceError: a is not defined

porque no esta definida la variable en un Scope global, es decir, que donde 
se definio la variable "a"; es en un scope propia de la funcion "divide", y acá no se 
puede ingresar para ver el valor de la variable "a" e imprimirla*/

console.log(a);

/*Si la variable se define en un Scope Global, ahí si se puede llamar con console.log(nombreVariable) y no
daría erros, ejemplo: */

var lugarNa = "El Estor";

function darLugar(){
    console.log(lugarNa);
}

darLugar();





var toni = "Toni";

function Hola(){
    console.log(toni);
}

/*QUE RARO, OJO, los códigos de las dos funciones anteriores Hola() y darLugar(), me arrojaron
error en VisualStudioCode, pero cuando los ejecute en el navegador directamente, en la 
consola del navegador si me arrojo los resultados para Hola() de Toni, y darLugar(): El Estor. QUE 
RARO. revisar detenidamente despúes*/

/*29-04-2022  GIT-*/
/*Algo que no sabía y me estaba complicando, cuando se trabaja con ramas,
es decir, cuando se trabaja localmente con Ramas, primero lo que se hace es crear una rama 
a nivel local:
git branch NombreDeLaRama
git checkout -b NombreDeLaRama

Luego de esto se manda un push con el nombre de la Rama a nuestro repositorio de GitHUB
por ejemplo:

git push origin NombreDeLaRama**** (POR LO QUE VEO ACA ES INDISPENSABLE COLOCAR LA 
    PALABRA ORIGIN)

se espera y listo se revisa en nuestro repositorio de GitHub

luego de esto, si se hicieran mas cambios localmente, en la rama nueva, que estamos
trabajando localmente (NombreDeLaRama), se guardan los cambios localmente, en primer
lugar, con git status, git add, y git commit, y luego
lo que se hace para pasar esos cambios a GitHub, se escribe este comando:

Git push origin NombreDeLaRama

enter

y se espera y listo, se actualizan los cambios en la rama creada en el repositorio de GitHub

LISTO*

ESTOY APRENDIENDO A USAR GIT !!!!!!!!!!!!!!!!!!*/



