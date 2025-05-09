playbutton.addEventListener('click', () => {
  const backgroundVideoPopout = document.getElementById('background-video-popout');
  const fullscreenVideoOverlay = document.getElementById('fullscreen-video-overlay');
  backgroundVideoPopout.style.display = 'flex';
  fullscreenVideoOverlay.style.display = 'flex';
});
