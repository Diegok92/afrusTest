// Crear una página en donde se muestre un campo de texto que permita
//buscar en el siguiente API: https://pokeapi.co/,
//por el número o nombre del pokémon y muestre en pantalla
//los siguientes datos: Nombre, número, tipo, peso, altura y una imágen.

window.addEventListener("load", function () {
  let form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    document.querySelector("ul").innerHTML = "";
    e.preventDefault();
    let pokemon = document.querySelector(".pokemon");

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (poke) {
        let nombre = "<p>" + poke.name + "</p>";
        let numero = "<p>" + "#" + poke.id + "</p>";
        let tipo = "<p>" + "Type: " + poke.types[0].type.name + "</p>";
        let peso = "<p>" + poke.weight / 10 + "kg" + "</p>";
        let altura = "<p>" + poke.height / 10 + "m" + "</p>";
        let imagen = "<img src=" + poke.sprites.front_default + ">";

        document.querySelector("ul").innerHTML += "<li>" + imagen + "</li>";
        document.querySelector("ul").innerHTML += "<li>" + nombre + "</li>";
        document.querySelector("ul").innerHTML += "<li>" + numero + "</li>";
        document.querySelector("ul").innerHTML += "<li>" + tipo + "</li>";
        document.querySelector("ul").innerHTML += "<li>" + peso + "</li>";
        document.querySelector("ul").innerHTML += "<li>" + altura + "</li>";
      })
      .catch(function (error) {
        console.log(error);
        alert("algo salio mal");
      });
  });
});
