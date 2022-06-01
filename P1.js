// Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera,
//se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *.

function multiplicar(x, y) {
  let rta = x / (1 / y);

  console.log(rta);

  return rta;
}

multiplicar(2.5, -10); //cambiar los numeros por los que se deseen
