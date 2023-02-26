//const's for the squares
const crashSquareEl = document.querySelector('#square-1')
const kickSquareEl = document.querySelector('#square-2')
const snareSquareEl = document.querySelector('#square-3')
const tomSquareEl = document.querySelector('#square-4')
//Audio files
const crashAudioEl = new Audio('./crash.wav')
const kickAudioEl = new Audio('./kick.mp3')
const snareAudioEl = new Audio('./Snare.mp3')
const tomAudioEl = new Audio('./tom.mp3')

//Crash Sound
crashSquareEl.addEventListener('click',()=>{
crashAudioEl.play();
})
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 67 || event.which === 67) {
      // Key code 67 corresponds to the "C" key
      crashAudioEl.play();
    }
  });

//Kick Sound
kickSquareEl.addEventListener('click',()=>{
    kickAudioEl.play();

})
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 75 || event.which === 75) {
      // Key code 75 corresponds to the "K" key

      kickAudioEl.play();
    }
  });

//Snare Sound
snareSquareEl.addEventListener('click',()=>{
snareAudioEl.play();

})
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 83 || event.which === 83) {
      // Key code 83 corresponds to the "C" key
      snareAudioEl.play();
    }
  });

//Tom Audio
tomSquareEl.addEventListener('click',()=>{
tomAudioEl.play();

})
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 84 || event.which === 84) {
      // Key code 84 corresponds to the "C" key
      tomAudioEl.play();
    }
  });

