
const audio = document.getElementById("music");
const button = document.getElementById("playBtn");

button.addEventListener("click", () => {
  audio.volume = 1;
  audio.muted = false;
  audio.play();
});
