//Varias de los items del proyecto agrupados y que afectan a todas o a casi todas las páginas

//ALERT QUE NOS INDICA EL COLOR DE FONDO

/*window.addEventListener('DOMContentLoaded', () => {
  alertColorFondo();
});

function alertColorFondo(color = null) {
  // obtiene el color actual de la variable CSS --color_oscuro
  const rootStyles = getComputedStyle(document.documentElement);
  const colorFondo = rootStyles.getPropertyValue('--color_oscuro').trim();

  //mensaje del texto del alert
  const mensaje = `El color de fondo actual es: ${colorFondo}`;

  alert(mensaje);
}

//CAMBIAR EL COLOR DE FONDO CON Ctrl + C

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === "c") {
    
    //genera un color aleatorio oscuro
    const colorAleatorio = generarColorOscuro();

    // cambia la variable CSS --color_oscuro
    document.documentElement.style.setProperty('--color_oscuro', colorAleatorio);

    console.log("Nuevo color de fondo:", colorAleatorio);
  }
}); 

function generarColorOscuro() {
  //randomiza los colores, pero siempre salen oscuros para no convertir la web en una feria
  const r = Math.floor(Math.random() * 80);
  const g = Math.floor(Math.random() * 80);
  const b = Math.floor(Math.random() * 80);
  return `rgb(${r}, ${g}, ${b})`;
} */

//MENÚ DESPLEGABLE EN LA BARRA DE NAVEGACIÓN EN "Consolas"

const consolasLink = document.getElementById('consolas-link');
    const marcasMenu = document.getElementById('marcas-menu');
    let menuTimeout;

//mostrar menú al hacer hover
consolasLink.addEventListener('mouseenter', function() {
    clearTimeout(menuTimeout);
    marcasMenu.style.display = 'block';
});

// esto oculta el menú con retraso para que no se cierre al momento si quitas el ratón de encima
consolasLink.parentElement.addEventListener('mouseleave', function() {
    menuTimeout = setTimeout(() => {
        marcasMenu.style.display = 'none';
    }, 200); // 200 milisegundos de retraso
});

// así se mantiene visible el desplegable si el ratón entra en el menú
marcasMenu.addEventListener('mouseenter', function() {
    clearTimeout(menuTimeout);
});

//ocultar al salir del menú
marcasMenu.addEventListener('mouseleave', function() {
    menuTimeout = setTimeout(() => {
        marcasMenu.style.display = 'none';
    }, 200); // 200 milisegundos de retraso
});

// con esto el click en "Consolas" funciona con normalidad
consolasLink.addEventListener('click', function() {
    marcasMenu.style.display = 'none';
});