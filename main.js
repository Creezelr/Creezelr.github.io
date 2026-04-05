
const audio = document.getElementById("soviet-anthem.mp3");
const button = document.getElementById("playBtn");

button.addEventListener("click", () => {
  audio.play();
  audio.loop = true;
});
