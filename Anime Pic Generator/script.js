const buttonEl = document.querySelector("#btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

buttonEl.addEventListener("click", async function () {
  try {
    //when we write above fetching we can initiate actions while the data is being retrieved
    buttonEl.disabled = true;
    buttonEl.innerText ='Loading...'
    animeNameEl.innerText ='Updating...'
    const url = "https://api.catboys.com/img";
    const response = await fetch(url);
    const data = await response.json();
    //This actions happen after and if the data is fetched and converted to json
    animeContainerEl.style.display = "block";
    animeImgEl.src = data.url;
    animeNameEl.innerText = data.artist;
    buttonEl.disabled = false;
    buttonEl.innerText ='Get Anime'
  } catch (error) {
    console.log(error);
  }
});
