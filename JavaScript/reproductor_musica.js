//REPRODUCTOR DE MÚSICA

document.addEventListener('DOMContentLoaded', () => {

    //variables para audio, play y pause
  const audio = document.getElementById('audio');
  const btnPlay = document.getElementById('btnPlay');
  const btnPause = document.getElementById('btnPause');
  
    //botón para play
  btnPlay.addEventListener('click', () => {
    audio.play();
  });
  
    //botón para pause
  btnPause.addEventListener('click', () => {
    audio.pause();
  });
});