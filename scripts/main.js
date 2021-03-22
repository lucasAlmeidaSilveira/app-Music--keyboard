// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event) {
  // keyCode
  let audioKeyCode = getKeyCode(event);

  // tecla digitada
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
  // if key exists?
  const isKeyExists = key;
  if (!isKeyExists) {
    return;
  }
  addPlayingClass(key);
  // play audio
  playAudio(audioKeyCode);
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function removePlayingClass(event) {
  event.target.classList.remove("playing");
}

function getKeyCode(event) {
  let keyCode;

  let isKeyboard = event.type === "keydown";
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function init() {
  // click with mouse
  keys.forEach((key) => {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
  });
  // keyboard type
  window.addEventListener("keydown", playNote);
}

window.addEventListener("load", init);