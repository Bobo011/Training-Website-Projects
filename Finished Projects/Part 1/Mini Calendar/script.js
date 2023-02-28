const monthEl = document.querySelector('.month')
const dayEl = document.querySelector('.day')
const numberEl = document.querySelector('.number')
const yearEl = document.querySelector('.year')
const today = new Date();

monthEl.innerHTML = today.toLocaleString('default', { month: 'long' });
dayEl.innerHTML = today.toLocaleString('en-us', {weekday:'long'})
numberEl.innerText =today.getDate(); 
yearEl.innerText = today.getFullYear();