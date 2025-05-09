const playbutton = document.getElementById('playBtn');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.getElementById('closeBtn');

playbutton.addEventListener('click', () => {
  background-video-popout.style.display = 'flex';
});

closebutton.addEventListener('click', () => {
  background-video-popout.style.display = 'none';
});
