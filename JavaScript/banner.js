window.addEventListener('load', () => {
  const sliderTrack = document.getElementById('sliderTrack');
  const slideWidth = 220; // ancho de cada figura (fijo)
  let position = 0;
  const totalSlides = 12; // 6 imágenes + 6 repetidas

  function moveSlider() {
    position -= 1; // mueve 1px a la izquierda

    // se resetea el loop al mover la mitad de imágenes
    if (position <= -slideWidth * (totalSlides / 2)) {
      position = 0;
    }

    sliderTrack.style.left = position + 'px';
    requestAnimationFrame(moveSlider);
  }

  requestAnimationFrame(moveSlider);
});