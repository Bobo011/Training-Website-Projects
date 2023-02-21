var video = document.querySelector(".video-background");
var pauseBtn = document.querySelector(".pause-btn");

pauseBtn.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    pauseBtn.innerHTML = "Pause";
  } else {
    video.pause();
    pauseBtn.innerHTML = "Play";
  }
});
