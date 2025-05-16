function videoplayer() {
  const el = document.getElementById('hiddenvideoplayer');
  el.style.display = 'flex';
  setTimeout(() => {
    el.classList.add('show');
  }, 10); // tiny delay to trigger fade-in
}

function videoplayerclose() {
  const el = document.getElementById('hiddenvideoplayer');
  el.classList.remove('show');
  setTimeout(() => {
    el.style.display = 'none';
  }, 300); // match transition duration
}
