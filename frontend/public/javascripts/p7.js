// Problema 7: Elaborar un formulario de tareas que contenga la siguiente información:
//Nombre de la tarea, fecha, prioridad y descripción.
//Al aceptar en el formulario, la información se debe visualizar en una tabla que debe ubicarse debajo del formulario.
//Consideraciones:
// Puedes agregar más elementos a la tabla, es decir más tareas.-
// En la tabla debe poder editar o borrar algún elemento usando un ícono o funcionalidad acorde.-
// El formulario debe tener un botón que lo limpie-

window.addEventListener("load", function () {
  let form = document.querySelector(".form");
  let titulo = document.querySelector(".titulo");
  let fecha = document.querySelector(".fecha");
  let prioridad = document.querySelector(".prioridad");
  let descripcion = document.querySelector(".descripcion");

  const listadoTareas = document.querySelector(".listadoTareas");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
      !titulo.value ||
      !fecha.value ||
      !prioridad.value ||
      !descripcion.value
    ) {
      alert("Completa todos los Campos");
    } else {
      let nuevaDescripcion = descripcion.value;
      let nuevoTitulo = titulo.value;
      let nuevaFecha = fecha.value;
      let nuevaPrioridad = prioridad.value;

      let nuevoBloqueTarea = document.createElement("div");
      nuevoBloqueTarea.classList.add("input-group", "bloqueTarea");

      let nuevoContenido = document.createElement("div");
      nuevoContenido.classList.add("contenido");

      nuevoBloqueTarea.appendChild(nuevoContenido);

      let nuevoInputDescripcion = document.createElement("textarea");
      nuevoInputDescripcion.classList.add("form-control", "descripcion");
      nuevoInputDescripcion.value = nuevaDescripcion;
      nuevoInputDescripcion.setAttribute("readonly", "readonly");

      let nuevoInputTitulo = document.createElement("input");
      nuevoInputTitulo.classList.add("form-control", "titulo");
      nuevoInputTitulo.value = nuevoTitulo;
      nuevoInputTitulo.setAttribute("readonly", "readonly");

      let nuevoInputFecha = document.createElement("input");
      nuevoInputFecha.setAttribute("type", "date");
      nuevoInputFecha.classList.add("form-control", "fecha");
      nuevoInputFecha.value = nuevaFecha;
      nuevoInputFecha.setAttribute("readonly", "readonly");

      let nuevoInputPrioridad = document.createElement("input");
      nuevoInputPrioridad.classList.add("form-control", "prioridad");
      nuevoInputPrioridad.value = nuevaPrioridad;
      nuevoInputPrioridad.setAttribute("readonly", "readonly");

      nuevoContenido.appendChild(nuevoInputTitulo);
      nuevoContenido.appendChild(nuevoInputFecha);
      nuevoContenido.appendChild(nuevoInputPrioridad);
      nuevoContenido.appendChild(nuevoInputDescripcion);

      let nuevoBloqueAccion = document.createElement("div");
      nuevoBloqueAccion.classList.add("input-group-append", "bloqueAccion");

      let nuevoBotonEditar = document.createElement("button");
      nuevoBotonEditar.classList.add(
        "btn",
        "btn-outline-secondary",
        "botonEditar"
      );
      nuevoBotonEditar.innerText = "Editar";

      let nuevoBotonBorrar = document.createElement("button");
      nuevoBotonBorrar.classList.add(
        "btn",
        "btn-outline-secondary",
        "botonBorrar"
      );
      nuevoBotonBorrar.innerText = "Borrar";

      nuevoBloqueAccion.appendChild(nuevoBotonEditar);
      nuevoBloqueAccion.appendChild(nuevoBotonBorrar);

      nuevoBloqueTarea.appendChild(nuevoBloqueAccion);
      listadoTareas.appendChild(nuevoBloqueTarea);

      nuevoBotonEditar.addEventListener("click", function (e) {
        if (nuevoBotonEditar.innerText == "Editar") {
          nuevoInputDescripcion.removeAttribute("readonly");
          nuevoInputTitulo.removeAttribute("readonly");
          nuevoInputFecha.removeAttribute("readonly");

          nuevoInputPrioridad.removeAttribute("readonly");

          nuevoInputDescripcion.focus();
          nuevoBotonEditar.innerText = "Guardar";
        } else {
          nuevoInputDescripcion.setAttribute("readonly", "readonly");
          nuevoInputTitulo.setAttribute("readonly", "readonly");
          nuevoInputFecha.setAttribute("readonly", "readonly");
          nuevoInputPrioridad.setAttribute("readonly", "readonly");

          nuevoBotonEditar.innerText = "Editar";
        }
      });

      nuevoBotonBorrar.addEventListener("click", function () {
        listadoTareas.removeChild(nuevoBloqueTarea);
      });
    }
  });
});
