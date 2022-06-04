# afrusTest - Formas de ejecucion y visualizacion:

luego de clonar el repo, e instalar Node.js, Proceder a hacer npm install asi se instalan todas las librerias necesarias para el correcto funcionamiento de todos los ejericios

# Ej 1.

cambiar los numeros por los que se deseen en la funcion multiplicar( , ).
por consola se vera la rta al escribir "node P1.js"

# Ej 2

Las funciones a cambiar sus valores para verificar su correcto funcionamiento son:

- pokesPor1Tipo() --> ej: pokesPor1Tipo("fire")
- pokesCon2Tipos( , ) --> ej: pokesCon2Tipos("water","flying")
- conseguirNumero() --> ej: conseguirNumero("pikachu")
- pokeStats() --> ej: pokeStats("25")
- ordenSegun([, ,], "") --> ej: ordenSegun([1, 2, 3, 4, 5], "peso")
- checkPokeyTipo("", "") --> ej: checkPokeyTipo("5", "grass")

por consola se veran las rtas. Al escribir "node P2.js"

---

# Ej 3

Probar distintas claves en la funcion checkPass("").
por consola se veran las rtas. Al escribir "node P3.js"

---

# Ej 4

Colocar distintos numeros en el array de la funcion infoArray([, ,])--> ej: infoArray([2, 3, 4,5555, 8, 9, 10, 1111])
por consola se vera las rta. Al escribir "node P4.js"

# Ej 5 en adelante

## entrar a la carpeta "frontend" (poner en consola: cd frontend), luego npm install, luego npm start --> en el puerto 3000 estara levantado el servidor (fue levantado usando express-generator), en la pagina ppal. (http://localhost:3000) estan los links a los ejercicios

## 5

Ir colocando caracteres en el cuadro de texto y a medida que se cumplan los requerimientos, se pondran en verde los mensajes

## 6

Colocar en el cuadro de texto un N° o nombre de un pokemon para conocer alguno de sus datos
al presionar el boton, se mostraran dichos datos

## 7

Colocar en los cuadro de texto un titulo, una fecha, una prioridad y la tarea en si
al presionar el boton "Agregar Tarea", las tareas se acumularan debajo del formulario
al presionar el boton "Limpiar Campos", el formulario se reestablecera

## 8

Ingresar un N° entre 1 y 15 y se cargaran las imagenes correspondientes (provienen de la api: https://api.imgflip.com/get_memes).
Nota: si el N° ingresado es menor a 15, se pueden seguir agregando imagenes a la pantalla hasta completar las 15.
Si el nuevo N° introducido hace superar el limite de 15 por pantalla, saltara un cartel de advertencia
