//const's for the squares
const crashSquareEl = document.querySelector("#square-1");
const kickSquareEl = document.querySelector("#square-2");
const snareSquareEl = document.querySelector("#square-3");
const tomSquareEl = document.querySelector("#square-4");
//Audio files
const crashAudioEl = new Audio("./crash.wav");
const kickAudioEl = new Audio("./kick.mp3");
const snareAudioEl = new Audio("./Snare.mp3");
const tomAudioEl = new Audio("./tom.mp3");


squareSound(crashSquareEl,crashAudioEl,67);
squareSound(kickSquareEl,kickAudioEl,75);
squareSound(snareSquareEl,snareAudioEl,83);
squareSound(tomSquareEl,tomAudioEl,84);



function squareSound(el,sound,code){
    el.addEventListener("click", () => {
        sound.play();
          el.style.backgroundSize = '110%';
        });
        document.addEventListener("keydown", (event) => {
          if (event.keyCode === code || event.which === code) {
            // C key :67
            //K key: 75
            //S key: 83
            //T key: 84
            sound.play();
            el.style.backgroundSize = '110%';
          }
        
          setTimeout(function() {
            el.style.backgroundSize = "100%";
          }, 1000);
        });

}

