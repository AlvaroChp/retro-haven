//variables globales
let intervaloEnemigos = null;
let juegoIniciado = false;
let vencidos = 0;
let escapados = 0;
let sonidoDisparo = null;
let puedeDisparar = true;

//inicia partida
function iniciarJuego() {
  if (juegoIniciado) return;
  
  // pone los contadores a 0
  vencidos = 0;
  escapados = 0;
  actualizarContadores();
  
  // para resetear posiciones
  posX1 = -300;
  posX2 = window.innerWidth + 300;
  posX3 = window.innerWidth + 300;
  
  // esto evita que nada más empezar me sume enemigos escapados por estar fuera de la pantalla
  enemigo1Escapado = false;
  enemigo2Escapado = false;
  enemigo3Escapado = false;
  
  //iniciar juego
  juegoIniciado = true;
  
  // esto evita bugs de conteo
  if (intervaloEnemigos) {
    clearInterval(intervaloEnemigos);
  }
  
  // contador de enemigos
  document.getElementById('contadorEnemigos').style.display = 'block';
  
  // muestra enemigos
  document.querySelectorAll('.enemigo').forEach(enemigo => {
    enemigo.style.display = 'block';
    enemigo.querySelector('img').style.display = 'block';
  });
  
  // posiciones iniciales de los enemigos fuera de la pantalla
  enemigo1.parentElement.style.left = `${posX1}px`;
  enemigo2.parentElement.style.left = `${posX2}px`;
  enemigo3.parentElement.style.left = `${posX3}px`;
  
  // esto inicia el movimiento de los enemigos
  intervaloEnemigos = setInterval(moverEnemigos, 16);
  
  //musica de Doom que solo se inicia al empezar a jugar
  const audio = document.getElementById('audio');
  audio.currentTime = 0;
  audio.play().catch(e => console.log("Error al reproducir:", e));
  
  //esto oculta los controles iniciales
  document.getElementById('controlesIniciales').style.display = 'none';
}

//al cargarse la página
document.addEventListener('DOMContentLoaded', () => {
  //ocultar contador y enemigos inicialmente
  document.getElementById('contadorEnemigos').style.display = 'none';
  
  //ocultar cada enemigo individualmente
  document.querySelectorAll('.enemigo').forEach(enemigo => {
    enemigo.style.display = 'none';
    enemigo.querySelector('img').style.display = 'none';
  });
  
  //configurar botones
  document.getElementById('Jugar').addEventListener('click', iniciarJuego);
  document.getElementById('Volver').addEventListener('click', () => {
    window.location.href = '../../index.html';
  });
  
  //cargar sonido de disparo
  sonidoDisparo = new Audio("../../audio/disparo_supershotgun.mp3");
});

const escopeta = document.getElementById("escopetaDoom");
const mirilla = document.getElementById("mirilla");

const rutaBase = "../../img/animaciones/";
const quieta = rutaBase + "supershotgun_quieta.gif";
const disparo = rutaBase + "supershotgun.gif";

//movimiento escopeta y mirilla
document.addEventListener("mousemove", (e) => {
 //la escopeta sigue al ratón en el eje X para que solo haya movimiento horizontal
  escopeta.style.left = `${e.clientX}px`;
  //la mirilla sigue al ratón tanto en el eje X como en el Y para que sustituya al cursor que he ocultado con CSS
  mirilla.style.left = `${e.clientX}px`; //
  mirilla.style.top = `${e.clientY}px`;
});

//disparo escopeta
document.addEventListener("click", () => {
  if (!puedeDisparar || !juegoIniciado) return;
  
  // desactivar el disparo temporalmente para evitar spam de tiros
  puedeDisparar = false;
  // animación de disparo
  escopeta.src = disparo;
  setTimeout(() => {
    escopeta.src = quieta;
    //reactiva la animación de la escopeta
    puedeDisparar = true;
  }, 1900);
  
  //sonido de disparo
  if (sonidoDisparo) {
    sonidoDisparo.currentTime = 0; // Reinicia el sonido
    sonidoDisparo.play().catch(e => console.log("Error al reproducir sonido de disparo:", e));
  }
});

// ENEMIGOS
const enemigo1 = document.querySelector(".enemigo.doomguy img");
const enemigo2 = document.querySelector(".enemigo.doomguy-grande img");
const enemigo3 = document.querySelector(".enemigo.doomguy-pequeño img");

// referencias a spans del contador
const contadorVencidos = document.getElementById("vencidos");
const contadorEscapados = document.getElementById("escapados");

function actualizarContadores() {
  contadorVencidos.textContent = vencidos;
  contadorEscapados.textContent = escapados;
}
actualizarContadores();

//velocidades de cada enemigo
let velocidad1 = 3.5;
let velocidad2 = 3;
let velocidad3 = 4;

// posiciones iniciales
let posX1 = -300;
let posX2 = window.innerWidth + 300;
let posX3 = window.innerWidth + 300;

// movimiento y estado
let moviendo1 = true;
let moviendo2 = true;
let moviendo3 = true;

// flags para evitar múltiples sumas
let enemigo1Escapado = false;  
let enemigo2Escapado = false;   
let enemigo3Escapado = false;

function moverEnemigos() {
  if (!juegoIniciado) return;
  
  // enemigo 1
  if (moviendo1) {
    posX1 += velocidad1;
    if (posX1 > window.innerWidth) {
      if (!enemigo1Escapado) {
        escapados++;
        actualizarContadores();
        enemigo1Escapado = true;
      }
      posX1 = -300;
    } else {
      enemigo1Escapado = false;
    }
    enemigo1.parentElement.style.left = `${posX1}px`;
  }

  //enemigo 2
  if (moviendo2) {
    posX2 -= velocidad2;
    if (posX2 < -300) {
      if (!enemigo2Escapado) {
        escapados++;
        actualizarContadores();
        enemigo2Escapado = true;
      }
      posX2 = window.innerWidth + 300;
    } else {
      enemigo2Escapado = false;
    }
    enemigo2.parentElement.style.left = `${posX2}px`;
  }

  // enemigo 3
  if (moviendo3) {
    posX3 -= velocidad3;
    if (posX3 < -300) {
      if (!enemigo3Escapado) {
        escapados++;
        actualizarContadores();
        enemigo3Escapado = true;
      }
      posX3 = window.innerWidth + 300;
    } else {
      enemigo3Escapado = false;
    }
    enemigo3.parentElement.style.left = `${posX3}px`;
  }
}

let enExplosion = false;

function explotar(enemigoImg, moviendoFlagSetter, posXRefSetter) {
  if (!juegoIniciado || enExplosion) return;
  if (!moviendoFlagSetter()) return;

  enExplosion = true;
  moviendoFlagSetter(false);
  vencidos++;
  actualizarContadores();

  enemigoImg.src = rutaBase + "doomguy.gif";

  setTimeout(() => {
    enemigoImg.src = rutaBase + "doomguy_quieto.gif";
    moviendoFlagSetter(true);
    if (posXRefSetter) {
      posXRefSetter();
    }
    enExplosion = false;
  }, 2000);
}

// eventos de click para cada enemigo
enemigo1.addEventListener("click", () => {
  explotar(enemigo1, 
    (val) => { if (val === undefined) return moviendo1; moviendo1 = val; }, 
    () => posX1 = -300);
});

enemigo2.addEventListener("click", () => {
  explotar(enemigo2, 
    (val) => { if (val === undefined) return moviendo2; moviendo2 = val; }, 
    () => posX2 = window.innerWidth + 300);
});

enemigo3.addEventListener("click", () => {
  explotar(enemigo3, 
    (val) => { if (val === undefined) return moviendo3; moviendo3 = val; }, 
    () => posX3 = window.innerWidth + 300);
});