const btnEl =document.querySelector('.btn')

// event listnener for moving a mouse
btnEl.addEventListener('mouseover',(event)=>{
const x = event.pageX -btnEl.offsetLeft;
const y = event.pageX -btnEl.offsetTop;

btnEl.style.setProperty('--xPos', x +'px')
btnEl.style.setProperty('--yPos', y +'px')

 

})