var play = false;

var audio = new Audio('/song/About.mp3');

document.querySelector('#play').addEventListener('click', () => {
  if (play)
    return;
  audio.play();
  play = true;
});

document.querySelector('#prev').addEventListener('click', () => {
  audio.prev();
  play = false;
});

document.querySelector('#next').addEventListener('click', () => {
  audio.next();
  audio.currentTime = 0;
  play = false;
});