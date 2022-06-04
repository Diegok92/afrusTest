window.addEventListener("load", function () {
  let form = document.querySelector(".form");
  let contador = 0;
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let cantidadImagenes = document.querySelector(".cantImagenes").value;

    let bloqueImagenes = document.querySelector(".imagenes");

    fetch("https://api.imgflip.com/get_memes")
      .then(function (res) {
        return res.json();
      })
      .then(function (meme) {
        if (contador >= 15) {
          alert("Ya hay 15 Imagenes en pantalla");
        } else {
          for (let i = 0; i < cantidadImagenes; i++) {
            let nuevaTarjeta = document.createElement("div");
            nuevaTarjeta.classList.add("card", "tarjeta");

            bloqueImagenes.appendChild(nuevaTarjeta);

            let nuevaImagen = document.createElement("img");
            nuevaImagen.classList.add("img-center", "imagen");
            nuevaImagen.src = meme.data.memes[i].url;

            nuevaTarjeta.appendChild(nuevaImagen);
            contador++;
          }
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("algo salio mal");
      });
  });
});
