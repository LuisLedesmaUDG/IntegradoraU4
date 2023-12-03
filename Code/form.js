//Se selecciona el boton y se le agrega escucha por un click
document.getElementById("btnEnviar").addEventListener("click", 

//Esta función trabaja en 2 partes, primero seleccionando y guardando en "campos" todos los selectores de tipo input(text y email) y area de texto.
function() {
    let campos = document.querySelectorAll("input[type='text'], input[type='email'], textarea");
    
    //Luego con un loop comparamos cada campo en el arreglo, si despues de hacer "trim" el valor es "" (null o vacio) se pinta de rojo de lo contrario de verde.
    campos.forEach(function(campo) {
        
        if (campo.value.trim() === "") {
            campo.style.backgroundColor = "#B46060";
            campo.style.border = "2px solid red";
        } else {
            campo.style.backgroundColor = "#C7E9B0";
            campo.style.color = "#17594A";
            campo.style.fontWeight = "Bold"; 
            campo.style.border = "2px solid #17594A"; 
            
        }
    });
}
);
// Obtenemos referencias a los elementos del formulario
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const correoInput = document.getElementById("correo");
const detallesInput = document.getElementById("detalles");
const urgenciaInput = document.querySelectorAll('input[name="urgencia"]');
const serviciosInputs = document.querySelectorAll('input[type="checkbox"]');

// Obtenemos referencia al los botones
const btnEnviar = document.getElementById("btnEnviar");



// Obtenemos referencia al contenedor del catálogo
const catalogoContainer = document.getElementById("catalogo");

// Manejador de evento para los botones

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault(); // Evitamos que el formulario se envíe
  if (!isValidForm()) {
    alert("Por favor, complete todos los campos obligatorios.");
    return;
  }
  // Crear un nuevo elemento para el catálogo
  const nuevoElemento = document.createElement("div");
  nuevoElemento.classList.add("elementoCatalogo");

  // Crear el contenido del elemento
  const contenido = `
    <h2>${nombreInput.value} ${apellidoInput.value}</h2>
    <p>Correo: ${correoInput.value}</p>
    <p>Detalles del proyecto: ${detallesInput.value}</p>
    <p>Urgencia: ${getSelectedUrgencia()}</p>
    <p>Servicios: ${getSelectedServicios()}</p>
  `;

  nuevoElemento.innerHTML = contenido;

  // Agregar el elemento al catálogo
  catalogoContainer.appendChild(nuevoElemento);

  // Limpiar el formulario
  nombreInput.value = "";
  apellidoInput.value = "";
  correoInput.value = "";
  detallesInput.value = "";

  for (const radio of urgenciaInput) {
    radio.checked = false;
  }
  for (const checkbox of serviciosInputs) {
    checkbox.checked = false;
  }
});

// Función para obtener el valor del radio button de urgencia seleccionado
function getSelectedUrgencia() {
  for (const radio of urgenciaInput) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return "No especificada"; // Si ninguno está seleccionado
}

// Función para validar el formulario
function isValidForm() {
    // Verifica que los campos obligatorios no estén vacíos
    if (
      nombreInput.value.trim() === "" ||
      apellidoInput.value.trim() === "" ||
      correoInput.value.trim() === ""
    ) {
      return false;
    }
    return true; // El formulario es válido
  }

// Función para obtener los servicios seleccionados
function getSelectedServicios() {
  const serviciosSeleccionados = [];
  for (const checkbox of serviciosInputs) {
    if (checkbox.checked) {
      serviciosSeleccionados.push(checkbox.id);
    }
  }
  return serviciosSeleccionados.length > 0 ? serviciosSeleccionados.join(", ") : "Ninguno seleccionado";
}
