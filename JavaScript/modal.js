//MODAL para las páginas de la carpeta "marcas"

function abrirModal(id) {
document.getElementById(id).style.display = "block";
}

function cerrarModal(id) {
document.getElementById(id).style.display = "none";
}

  // cerrar al hacer clic fuera del contenido
window.onclick = function(event) {
    const modales = document.querySelectorAll(".modal");
    modales.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
        }
    });
}