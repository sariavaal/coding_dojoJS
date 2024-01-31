document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    console.log(video)
    if (video) {
        console.log(video)
    video.addEventListener("mouseover", function () {
        video.muted = true;
        video.play();
      });
  
      video.addEventListener("mouseout", function () {
        video.pause();
        video.muted = true;
      });
    }
  });