function SiRetorna (){
    return 10;
}

SiRetorna();

/*Que raro este codigo si me funciona en las herramientas de navegador, en la parte de desa-
rrollador, pero no en editores como este que raro.

*/
function Plus(x,y){
    return  x+y;
}


Plus(2,4);
/*Que raro este codigo si me funciona en las herramientas de navegador, en la parte de desa-
rrollador, pero no en editores como este que raro.

acá me da como resultado un 6
*/

function resta(p,q){
    console.log("hola");
    console.log("Kikab");
    return p-q;
    console.log("probando si imprime esta cadena o string, ya que esta despúes del return");
}


resta(8,2);

/*segun lo que entendi en el video, solo se puede retornar una vez, con la palabra
reservada return. */

function multiplica(w,r){
    console.log(w*r);
    return;
    console.log("Esta es una multiplicación")

}

multiplica(8,3);