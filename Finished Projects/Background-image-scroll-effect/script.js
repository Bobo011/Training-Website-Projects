const bgImageEl =document.querySelector('#bg-image')

window.addEventListener('scroll',()=>{
    updateImage()
})

function updateImage(){
    //changes opacity when we scroll down
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900
//changes background image size
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset/12 +'%'
}