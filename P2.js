// Problema 2:  Genere una serie de funciones (Una por cada ítem) que consuma de la página de https://pokeapi.co/ y retorne lo siguiente:
// Suma total de pokemones por tipo, debe recibir el tipo en string.
// Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.
// Dado el nombre de un pokémon retornar el número del mismo.
// Dado el número de un pokémon retornar un objeto con sus 6 stats base.
// Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador
// y retorne los pokémon en un arreglo con su nombre, tipo y peso ordenados según se indique por la función por uno de estos 3 indicadores.
// Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon de ese número posee este tipo.

const fetch = require("node-fetch");
let _ = require("underscore");

async function pokesPor1Tipo(tipo) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
    let pokes = await res.json();

    let sumaPorTipo = 0;

    for (let i = 0; i < pokes.pokemon.length; i++) {
      sumaPorTipo++;
    }
    console.log("---------------Ej: 2.1-----------------");
    console.log("Hay " + sumaPorTipo + " del tipo: " + tipo);

    return sumaPorTipo;
  } catch (error) {
    console.log(error.message);
  }
}

pokesPor1Tipo("electric"); //escribir el tipo para recibir la cant.

async function pokesCon2Tipos(tipo1, tipo2) {
  try {
    let res1 = await fetch(`https://pokeapi.co/api/v2/type/${tipo1}`);
    let pokesTipo1 = await res1.json();

    let res2 = await fetch(`https://pokeapi.co/api/v2/type/${tipo2}`);
    let pokesTipo2 = await res2.json();

    let pokes1 = [];
    let pokes2 = [];
    let pokesConAmbos = [];

    for (let i = 0; i < pokesTipo1.pokemon.length; i++) {
      pokes1.push(pokesTipo1.pokemon[i].pokemon.name);
    }

    for (let i = 0; i < pokesTipo2.pokemon.length; i++) {
      pokes2.push(pokesTipo2.pokemon[i].pokemon.name);
    }

    pokesConAmbos = pokes1.filter(function (poke) {
      return pokes2.includes(poke);
    });
    console.log("---------------Ej: 2.2-----------------");
    console.log("Con los tipos " + tipo1 + " y " + tipo2 + " estan: ");
    console.log(pokesConAmbos);

    return pokesConAmbos;
  } catch (error) {
    console.log(error.message);
  }
}

pokesCon2Tipos("flying", "fire"); //escribir ambos tipos para recibir los Pokes que cumplen.

async function conseguirNumero(poke) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    let pokeFound = await res.json();
    let pokeId = pokeFound.id;

    console.log("---------------Ej: 2.3-----------------");
    console.log(poke + " es el #" + pokeId);

    return pokeId;
  } catch (error) {
    console.log(error.message);
  }
}
conseguirNumero("mew"); //escribir el nombre del Poke para saber su ID

async function pokeStats(pokeId) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    let pokeFound = await res.json();
    let stats = new Object();

    for (let i = 0; i < pokeFound.stats.length; i++) {
      stats[pokeFound.stats[i].stat.name] = pokeFound.stats[i].base_stat;
    }

    console.log("---------------Ej: 2.4-----------------");
    console.log("Los stats base de " + pokeFound.name + " son: ");
    console.log(stats);
    return stats;
  } catch (error) {
    console.log(error.message);
  }
}
pokeStats("25"); //escribir # del Pokemon para obtener un obj con sus stats base

async function ordenSegun(pokesId, ordenador) {
  try {
    let pokeObjects = [];

    for (let i = 0; i < pokesId.length; i++) {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokesId[i]}`);
      let pokeFound = await res.json();
      let pokeObj = {};

      pokeObj["nombre"] = pokeFound.name;
      pokeObj["peso"] = pokeFound.weight;
      pokeObj["tipo"] = pokeFound.types[0].type.name;

      pokeObjects[i] = pokeObj;
    }

    console.log("---------------Ej: 2.5-----------------");

    switch (ordenador) {
      case "nombre":
        console.log("orden por Nombre: ");
        pokesOrdenados = _.sortBy(pokeObjects, "nombre");
        break;

      case "peso":
        console.log("orden segun Peso: ");
        pokesOrdenados = _.sortBy(pokeObjects, "peso");
        break;

      case "tipo":
        console.log("orden segun Tipo: ");
        pokesOrdenados = _.sortBy(pokeObjects, "tipo");
        break;

      default:
        console.log("orden segun #: ");
        pokesOrdenados = pokeObjects;
    }

    console.log(pokesOrdenados);
    return pokesOrdenados;
  } catch (error) {
    console.log(error.message);
  }
}
// escribir un array de #de pokes y una forma de orden ("peso", "nombre" o "tipo")
ordenSegun([1, 2, 3, 4, 5, 6, 8, 10], "nombre");

async function checkPokeyTipo(pokeId, tipo) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    let pokeFound = await res.json();

    console.log("---------------Ej: 2.6-----------------");

    if (tipo == pokeFound.types[0].type.name) {
      console.log("Correcto, " + pokeFound.name + " es: " + tipo);
      return true;
    } else {
      console.log(
        "Incorrecto, " + pokeFound.name + " es: " + pokeFound.types[0].type.name
      );
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
}
checkPokeyTipo("1", "electric"); //escribir un #de pokemon y un tipo para verificar si es correcto
