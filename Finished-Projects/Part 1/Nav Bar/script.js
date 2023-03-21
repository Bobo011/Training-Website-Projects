const bar =document.querySelector('.fa-bars')
const menu = document.querySelector('.menu')

bar.addEventListener('click',()=>{
    // The classList property returns the CSS classnames of an element.ეს ნიშნავს რომ როცა ბარს ვაჭერ show-menu css class-ი ემატება menu-s Dom=s
    menu.classList.toggle('show-menu')
})