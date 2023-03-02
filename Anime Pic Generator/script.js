const buttonEl = document.querySelector('#btn');
const imageEl = document.querySelector('.image');
const imageNameEl = document.querySelector('.image-source');

const url = 'https://api.waifu.pics';

async function getAnimePics() {
  await fetch(`${url}/sfw/neko`).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        imageEl.style.display = 'block';
        imageEl.src = data.url;
        imageNameEl.style.display = 'block';
        const imageUrlParts = data.url.split('/');
        const imageName = imageUrlParts[imageUrlParts.length - 1];
        imageNameEl.textContent = `${imageName}`;
      });
    } else {
        
      console.error('Failed to retrieve the image ');
    }
  }).catch((error) => {
    console.error(error);
  });
}

buttonEl.addEventListener('click', getAnimePics);






// async function getQuote(){

//     const url = "https://api.quotable.io/random";
//     let doubleQuote1 = '\u{201F}';
//     let doubleQuote2 = '\u{201E}';
//     try {
//         buttonEl.disabled = true;
//         quoteEl.innerText = 'Updating...'
//         buttonEl.innerText = 'Loading...'
//         authorEl.style.display ='block'
//         await fetch(url)
//            .then((data) => data.json())
//            .then((item) => {
//             quoteEl.innerText = `${doubleQuote1}${item.content}${doubleQuote2}`;
//             authorEl.innerText = '-'+ item.author;
//             buttonEl.disabled = false;
//             buttonEl.innerText ='Get A Quote'
//           });
//     } catch (error) {
//         titleEl.style.display ='none'
//         quoteEl.innerText = 'No Internet Access, Please Try Again later';
//         authorEl.style.display ='none'
//         console.log(error);
//     }
        
      
    
    
//     }