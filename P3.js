// Se desea crear un validador para la contraseña de un sitio web,
//pero esta debe ser muy segura,
//para ello el cliente solicita los siguientes requerimientos para el password:

// Debe tener al menos 16 caracteres.-
// Debe tener letras minúsculas y mayúsculas.-
// No puede tener 2 letras iguales consecutivas.-
// Debe contener al menos 4 números.-
// No puede tener 2 números iguales consecutivos.-
// Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?)-
//////pero ninguno de ellos puede repetirse en ninguna posición-
///////y además los caracteres no pueden estar juntos.-
// No se puede usar el número 0.-
// No se puede colocar espacios.

// Nota: No debe usar expresión regular.

function checkPass(pass) {
  let flag = 0;
  let contMinus = 0;
  let contMayus = 0;
  let caracterPasado = 0;
  let contNum = 0;
  let contCarEsp = 0;
  let historicCarEsp = [];

  if (pass.length < 16) {
    flag++;
  } else {
    for (let i = 0; i < pass.length; i++) {
      if (pass[i] == 0) {
        //aplica tamb para espacios
        flag++;
      }
      if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) {
        contMayus++;
      } else if (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) {
        contMinus++;
      } else if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
        contNum++;
      } else if (
        pass[i] == "!" ||
        (pass.charCodeAt(i) >= 35 && pass.charCodeAt(i) <= 38) ||
        (pass.charCodeAt(i) >= 42 && pass.charCodeAt(i) <= 43) ||
        pass[i] == "-" ||
        pass[i] == "=" ||
        (pass.charCodeAt(i) >= 63 && pass.charCodeAt(i) <= 64) ||
        (pass.charCodeAt(i) >= 94 && pass.charCodeAt(i) <= 95)
      ) {
        contCarEsp++;

        if (historicCarEsp.length > 0) {
          if (historicCarEsp.indexOf(pass[i]) != -1) {
            flag++;
          }
        }
        historicCarEsp.push(pass[i]);
      }

      if (i == 0) {
        caracterPasado = pass[i];
      } else {
        if (pass[i] != caracterPasado) {
          caracterPasado = pass[i];
        } else {
          flag++;
        }
      }
    }
  }

  if (
    flag == 0 &&
    contMinus > 1 &&
    contMayus > 1 &&
    contNum >= 4 &&
    contCarEsp >= 2
  ) {
    console.log("La password cumple los requisitos");
    return true;
  } else {
    console.log("La password NO cumple los requisitos");
    return false;
  }
}

checkPass("!@#$%svnQ^&*-_+=?14896GHYT{psapsav{pa{j");
