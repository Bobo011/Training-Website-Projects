const inputValueEl = document.querySelector('#input');
const errorMessageEl = document.querySelector('#errorMessage');
const buttonEl = document.querySelector('#btn');
const galleryEl = document.querySelector('#gallery');

const apiKey = 'kNV-S4tzbyBSVtZdlHBLUwarW6BJK2F4LMun7VgDSUI';
const apiUrl = `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=10`;

function getPhotos() {
  const inputValue = inputValueEl.value;

  if (inputValue < 1 || inputValue > 10) {
    errorMessageEl.style.display = 'block';
    return;
  }

  errorMessageEl.style.display = 'none';

  const perPageApiUrl = `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=${inputValue}`;

  fetch(perPageApiUrl)
    .then(response => response.json())
    .then(data => {
        galleryEl.style.display='block'
      galleryEl.innerHTML = '';
      data.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.regular;
        img.alt = photo.alt_description;
        galleryEl.appendChild(img);
      });
    })
    .catch(error => console.log(error));
}

buttonEl.addEventListener('click', getPhotos);
