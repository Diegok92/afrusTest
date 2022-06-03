window.addEventListener("load", function () {
  console.log("hola mundo");

  let boton = document.querySelector(".boton");
  boton.addEventListener("click", function (e) {
    e.preventDefault();
  });

  let pass = document.querySelector(".password");

  let pa = document.querySelector(".a");
  let pb1 = document.querySelector(".b1");
  let pb2 = document.querySelector(".b2");
  let pcf2 = document.querySelector(".cf2");
  let pd = document.querySelector(".d");
  let pf = document.querySelector(".f");
  let pgh = document.querySelector(".gh");

  pass.addEventListener("input", function (e) {
    let pass = e.target.value;
    console.log(pass);

    if (pass.length < 16) {
      pa.classList.add("error");
    } else {
      pa.classList.remove("error");
    }

    let flagConsecutivo = 0;
    let contMinus = 0;
    let contMayus = 0;
    let caracterPasado = 0;
    let contNum = 0;
    let contCarEsp = 0;
    let historicCarEsp = [];
    let flagCaracterEspRepetido = 0;
    let flag0 = 0;

    for (let i = 0; i < pass.length; i++) {
      if (pass[i] == 0) {
        flag0++;
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
            flagCaracterEspRepetido++;
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
          flagConsecutivo++;
        }
      }
    }

    if (contMayus > 0) {
      pb1.classList.remove("error");
    } else {
      pb1.classList.add("error");
    }

    if (contMinus > 0) {
      pb2.classList.remove("error");
    } else {
      pb2.classList.add("error");
    }

    if (flagCaracterEspRepetido == 0 && contCarEsp >= 2) {
      pf.classList.remove("error");
    } else {
      pf.classList.add("error");
    }

    if (flag0 > 0) {
      pgh.classList.add("error");
    } else {
      pgh.classList.remove("error");
    }

    if (contNum >= 4) {
      pd.classList.remove("error");
    } else {
      pd.classList.add("error");
    }

    if (flagConsecutivo > 0) {
      pcf2.classList.add("error");
    } else {
      pcf2.classList.remove("error");
    }
  });
});
