const imageContainerEl =document.querySelector('.image-container');

const buttonEl =document.querySelector('.btn')

buttonEl.addEventListener('click',()=>{

addNewImages();

})

function addNewImages() {
for (let i = 0; i < 3; i++) {
    const newImage = document.createElement('img')
    //Math.Floor rounds up the numbers
    newImage.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`

    imageContainerEl.appendChild(newImage)
    
}
    
}