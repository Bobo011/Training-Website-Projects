const inputEl = document.querySelector("#input");
const infoTextEl = document.querySelector("#info-text");
const meaningContainerEl = document.querySelector('#meaning-container')

const titleEl = document.querySelector('#title')
const meaningEl = document.querySelector('#meaning')
const audioEl = document.querySelector('#audio')




async function fetchAPI(word) {
  try {
    meaningContainerEl.style.display = 'none'
    infoTextEl.style.display ="block"
    
    infoTextEl.innerText =`Searching the meaning of '${word}'`
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
if(result.title){
    infoTextEl.style.display ="none"
    meaningContainerEl.style.display = 'block'
    titleEl.innerText = word
    meaningEl.innerText = 'N/A'
    audioEl.style.display = 'none'
}else{
//after the url is fetched and converted to json
infoTextEl.style.display ="none"
meaningContainerEl.style.display = 'block'
//this puts the audio element in the center
audioEl.style.display ='inline-flex'
titleEl.innerText = result[0].word
meaningEl.innerText = result[0].meanings[0].definitions[0].definition
audioEl.src =result[0].phonetics[0].audio
}


  } catch (error) {
    console.log(error);
    infoTextEl.innerText =`An error happened, try again later`
  }
}


//we can enter data only if the field is not empty and we have pressed enter
inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
