const ratingEls = document.querySelectorAll(".rating");
const btnEl =document.querySelector('#btn')
const containerEl = document.querySelector('#container')
let selectedRating =''

//this targets all elements and gives all of them an event listener
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    //parentNode ensures that if we click every element, in this case the icons we will activate the listener
    
    removeActive();
    selectedRating= event.target.innerText || event.target.parentNode.innerText
event.target.classList.add('active')
event.target.parentNode.classList.add('active')

  });
});


btnEl.addEventListener('click',()=>{
    //prevents the button from submitting if no Rating has been pressed
    if(selectedRating !== ''){
containerEl.innerHTML = `
<strong>Thank you!</strong>
<br>
<br>
<strong>Feedback: ${selectedRating}</strong>
<p>We'll Use your feedback to improve our customer support</p>`
    }
})



//removes all the active classes except the one we pressed
function removeActive() {
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove('active')
    })
    
}
