document.addEventListener("DOMContentLoaded", (event) => {
  const video = document.getElementById("bg-video");
  
  // Function to fade out and restart the video
  const fadeOutAndRestart = () => {
    video.classList.add("fade-out");
    setTimeout(() => {
      video.currentTime = 0; // Restart video
      video.play();
      video.classList.remove("fade-out");
      console.log(video);
    }, 1000); // Match the transition duration
  };

  // Trigger fade out and restart when video ends
  video.addEventListener("ended", fadeOutAndRestart);

  // Initial play
  video.addEventListener("play", () => {
    video.classList.add("bg-video__content__fade-in");
    video.classList.remove("bg-video__content__fade-out");
  });
});
