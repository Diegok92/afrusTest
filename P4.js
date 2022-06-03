// Dado un arreglo de números cualesquiera sacar la siguiente información:

// Cantidad de elementos del arreglo.-
// Porcentaje de números pares e impares.-
// Porcentaje de números mayores a 1000.-
// Cuál es el mayor y menor valor.-
// Asuma los siguientes indicadores:
/////Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo
/////y el porcentaje del promedio de todos los números.-

function infoArray(array) {
  let rta = new Object();
  let pares = 0;
  let impares = 0;
  let porcentajePares = 0;
  let porcentajeImpares = 0;
  let cantSup1000 = 0;
  let porcentajeSup1000 = 0;
  let mayor = 0;
  let menor = 0;
  let asumoPorcentajeNumMin = 0;
  let sumaTotal = 0;
  let promedio = 0;
  let asumoPorcentajePromedio = 0;

  for (let i = 0; i < array.length; i++) {
    sumaTotal = sumaTotal + array[i];
    if (array[i] % 2 == 0) {
      pares++;
    } else {
      impares++;
    }

    if (array[i] > 1000) {
      cantSup1000++;
    }

    if (i == 0) {
      mayor = array[i];
      menor = array[i];
    } else {
      if (array[i] > mayor) {
        mayor = array[i];
      } else if (array[i] < menor) {
        menor = array[i];
      }
    }
  }
  rta["a_Cantidad"] = array.length;

  porcentajePares = (pares * 100) / array.length;
  porcentajePares = porcentajePares.toFixed(2);
  rta["b1_PorcentajePares"] = parseFloat(porcentajePares);

  porcentajeImpares = (impares * 100) / array.length;
  porcentajeImpares = parseFloat(porcentajeImpares.toFixed(2));
  rta["b2_PorcentajeImpares"] = porcentajeImpares;

  porcentajeSup1000 = (cantSup1000 * 100) / array.length;
  porcentajeSup1000 = porcentajeSup1000.toFixed(2);
  rta["c_PorcentajeSup1000"] = parseFloat(porcentajeSup1000);

  rta["d1_Mayor"] = mayor;
  rta["d2_Menor"] = menor;

  asumoPorcentajeNumMin = (menor * 100) / mayor;
  asumoPorcentajeNumMin = asumoPorcentajeNumMin.toFixed(2);
  rta["e1_asumoPorcentajeNumMin"] = parseFloat(asumoPorcentajeNumMin);

  promedio = sumaTotal / array.length;
  asumoPorcentajePromedio = (promedio * 100) / mayor;
  asumoPorcentajePromedio = asumoPorcentajePromedio.toFixed(2);
  rta["e2_asumoPorcentajePromedio"] = parseFloat(asumoPorcentajePromedio);

  console.log(rta);
  return rta;
}

infoArray([2, 3, 4, 5, 6, 7, 8, 9, 10, 1111]); //cambiar los numeros por los que se deseen
