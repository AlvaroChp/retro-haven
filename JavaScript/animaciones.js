// https://es.bloggif.com/gif-extract para descomponer gif en frames sueltos

// https://pixlr.com/es/express/ para arreglar posibles fallos en los frames

// https://online-video-cutter.com/es/trim-gif recortar tiempo del gif

// https://www.iloveimg.com/es/recortar-imagen/recortar-gif recortar tamaño del gif

//Animaciones de los easter eggs que salen con el código konami

// elementos del DOM
document.addEventListener('DOMContentLoaded', function() {
    // Elementos comunes a todas las páginas
    const triggerZone = document.getElementById('codigo-secreto');
    const easterEgg = document.getElementById('easter-egg');
    const animaciones = document.querySelector('.animaciones');
    
    // elemento específico de index.html
    const contenidoSecreto = document.getElementById('contenido-secreto');
    const mensajeBienvenida = document.querySelector('main > p:first-of-type');

    // mostrar/ocultar libretita
    if (triggerZone && easterEgg) {
        triggerZone.addEventListener('mouseenter', function() {
            easterEgg.classList.add('visible');
        });
        triggerZone.addEventListener('mouseleave', function() {
            easterEgg.classList.remove('visible');
        });
    }

    //código Konami 
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                       'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        // verifica la tecla actual
        const expectedKey = konamiCode[konamiIndex];
        const isCaseInsensitive = konamiIndex >= 8; // 'b' y 'a' no son key sensitive
        const keyPressed = isCaseInsensitive ? e.key.toLowerCase() : e.key;
        const expectedKeyLower = isCaseInsensitive ? expectedKey.toLowerCase() : expectedKey;
        
        if (keyPressed === expectedKeyLower) {
            konamiIndex++;
            
            //código completo
            if (konamiIndex === konamiCode.length) {
                //hace visibles los easter eggs
                if (animaciones) animaciones.classList.add('visible');
                
                // efecto específico para index.html
                if (contenidoSecreto) {
                    contenidoSecreto.style.display = 'block';
                    if (mensajeBienvenida) mensajeBienvenida.style.display = 'none';
                }
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0; // reset si falla
        }
    });


    //ANIMACIONES EN LAS PÁGINAS DE LA CARPETA HTML

    //PAC-MAN
    document.addEventListener('click', function(e) {
      if (e.target.id === 'pacmanZampando') {
        const gif = e.target;
          
        gif.src = "../img/animaciones/pacman.gif";
          
        const intervalo = setInterval(() => {
          if (gif.src.includes("pacman.gif")) {
            gif.src = "../img/animaciones/pacman_quieto.gif";
            clearInterval(intervalo);
          }
        }, 10000); //duración del gif
      }
    });

    //FANTASMA
    document.addEventListener('click', function(e) {
      if (e.target.id === 'fantasmaHuyendo') {
        const gif = e.target;
          
        gif.src = "../img/animaciones/fantasma.gif";
          
        const intervalo = setInterval(() => {
          if (gif.src.includes("fantasma.gif")) {
            gif.src = "../img/animaciones/fantasma_quieto.gif";
            clearInterval(intervalo);
          }
        }, 10000);
      }
    });

    //MARIO
    document.addEventListener('click', function(e) {
      if (e.target.id === 'marioCaminando') {
        const gif = e.target;
          
        gif.src = "../img/animaciones/mario.gif";
          
        const intervalo = setInterval(() => {
          if (gif.src.includes("mario.gif")) {
            gif.src = "../img/animaciones/mario_quieto.png";
            clearInterval(intervalo);
          }
        }, 10000);
      }
    });

    //BOWSER
    document.addEventListener('click', function(e) {
      if (e.target.id === 'bowserAtacando') {
        const gif = e.target;
          
        gif.src = "../img/animaciones/bowser.gif";
          
        const intervalo = setInterval(() => {
          if (gif.src.includes("bowser.gif")) {
            gif.src = "../img/animaciones/bowser_quieto.gif";
            clearInterval(intervalo);
          }
        }, 10000);
      }
    });

    //DOOMGUY
    document.addEventListener('click', function(e) {
      if (e.target.id === 'doomguyExplotando') {
        const gif = e.target;
          
        gif.src = "../img/animaciones/doomguy.gif";
          
        const intervalo = setInterval(() => {
          if (gif.src.includes("doomguy.gif")) {
            gif.src = "../img/animaciones/doomguy_quieto.gif";
            clearInterval(intervalo);
          }
        }, 10000);
      }
    });

    //CYBERDEMON
    document.addEventListener('click', function(e) {
      if (e.target.id === 'cyberdemonDisparando') {
        const gif = e.target;
          
        gif.src = "../img/animaciones/cyberdemon.gif";
          
        const intervalo = setInterval(() => {
          if (gif.src.includes("cyberdemon.gif")) {
            gif.src = "../img/animaciones/cyberdemon_quieto.gif";
            clearInterval(intervalo);
          }
        }, 10000);
      }
    });

    //SAMUS
    document.addEventListener('click', function(e) {
        if (e.target.id === 'samusCorriendo') {
          const gif = e.target;
          
          // esto hace que el gif se mueva
          gif.src = "../img/animaciones/samus.gif";
          
          // con esto volvemos al estado inicial del gif sin animación
          const intervalo = setInterval(() => {
            if (gif.src.includes("samus.gif")) {
              gif.src = "../img/animaciones/samus_quieta.gif";
              clearInterval(intervalo);
            }
          }, 10000
    );
        }
      });

    //METROIDE
    document.addEventListener('click', function(e) {
      if (e.target.id === 'metroidePeligroso') {
        const gif = e.target;
          
        gif.src = "../img/animaciones/metroide.gif";
          
        const intervalo = setInterval(() => {
          if (gif.src.includes("metroide.gif")) {
            gif.src = "../img/animaciones/metroide_quieto.gif";
            clearInterval(intervalo);
          }
        }, 10000);
      }
    });
});