const buttonEl = document.querySelector('#btn');
const jokeEl = document.querySelector('#joke')
//Const for the Api Key
const apiKey = 'KJTHJ8SOKRou6fMhjTo15Q==iTj9dvtHywl8bCmr';
//Const for Getting the Key
const options = {
    method:'GET',
    headers:{
        'X-Api-Key': apiKey,
    }
}
//const for APi Url and the limit is set to 1
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke() {

try {
    //Shows up when the Data is being fetched and disables the button until it is done
    joke.innerText= 'Updating...';
    buttonEl.disabled = true;
    buttonEl.innerText = 'Loading...'
    //Gets the Data and waits to fetch the data first before converting it to Json 
const response = await  fetch(apiUrl,options)
const data = await response.json()
//Enables the button after the data is fetched
buttonEl.disabled = false;
buttonEl.innerText = 'Tell Me a Joke'
jokeEl.innerHTML = data[0].joke;
} catch (error) {
    
}





}


buttonEl.addEventListener('click', getJoke)