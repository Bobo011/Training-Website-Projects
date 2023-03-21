const navbarEl = document.querySelector('.navbar');
const bottomContainerEl = document.querySelector('.bottom-container');

console.log(navbarEl.offsetHeight);

window.addEventListener('scroll',()=>{
    //this allows us to get the right cordinates fo when to activate the eventListener
    //936
    //console.log(window.scrollY);
    //50 in this case is the margin of the text
    //ეს ფორმულა ნიშნავს, რომ კონკრეტურ ადფილას როცა ჩამოსქროლავ navbar-ი შეიცვლება
if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
    navbarEl.classList.add('active')
}else{
    navbarEl.classList.remove('active')
}
})
