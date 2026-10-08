function cambiarVideo(elemento) {
  const videoPlayer = document.getElementById("video-player");

  if (!elemento || !videoPlayer) {
    return;
  }

  const nuevaFuente = elemento.getAttribute("src");
  const source = videoPlayer.querySelector("source");

  if (!nuevaFuente || !source) {
    return;
  }

  source.setAttribute("src", nuevaFuente);
  videoPlayer.load();
  videoPlayer.play();
}