const quoteEl = document.querySelector('#quote');
const authorEl = document.querySelector('#quote-origin')
const buttonEl = document.querySelector('#btn')
const titleEl = document.querySelector('.title')


async function getQuote(){

const url = "https://api.quotable.io/random";
let doubleQuote1 = '\u{201F}';
let doubleQuote2 = '\u{201E}';
try {
    buttonEl.disabled = true;
    quoteEl.innerText = 'Updating...'
    buttonEl.innerText = 'Loading...'
    authorEl.style.display ='block'
    await fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quoteEl.innerText = `${doubleQuote1}${item.content}${doubleQuote2}`;
        authorEl.innerText = '-'+ item.author;
        buttonEl.disabled = false;
        buttonEl.innerText ='Get A Quote'
      });
} catch (error) {
    titleEl.style.display ='none'
    quoteEl.innerText = 'No Internet Access, Please Try Again later';
    authorEl.style.display ='none'
    console.log(error);
}
    
  


}

window.addEventListener("load", getQuote);
buttonEl.addEventListener('click',getQuote)