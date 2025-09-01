function cambiarVideo(elemento) {
  const videoPlayer = document.getElementById("video-player");
  const nuevaFuente = elemento.getAttribute("src");
  videoPlayer.querySelector("source").setAttribute("src", nuevaFuente);
  videoPlayer.load();
  videoPlayer.play();
}