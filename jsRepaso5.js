var mensajeError = 'Dato incorrecto';
var mensaje= 'Es vocal';

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.lenght>1) {
    return mensajeError;
  }
  if (letra ==='a' || letra ==='e' || letra ==='i'|| letra ==='o'
  || letra === 'u' || letra === 'A' || letra ==='E' || letra === 'I' || letra === 'O'
  || letra === 'U'){
    return mensaje;

  } else {
    return mensajeError;
  }
}



