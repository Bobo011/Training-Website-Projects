const grandP =document.querySelector('.grand-parent')

const children = grandP.querySelectorAll('.child')

children.forEach((e)=>{
e.style.color = 'orange'
})