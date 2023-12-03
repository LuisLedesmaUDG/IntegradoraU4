
const btnGoogle = document.getElementById("btnGoogle");
const btnCorreo = document.getElementById("btnCorreo");
const btnVolver = document.getElementById("btnVolver");

btnGoogle.addEventListener("click", function() {
    // Define la URL local a la que quieres redirigir
    let urlLocal = "http://localhost:5500/google.html";
    
    // Realiza la redirección
    window.location.href = urlLocal;
  });

btnCorreo.addEventListener("click", function() {
    let urlLocal = "http://localhost:5500/correo.html";
    
    window.location.href = urlLocal;
  });
