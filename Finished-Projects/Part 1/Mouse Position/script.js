const mouseX =document.querySelector('.mouseX')
const mouseY =document.querySelector('.mouseY')

document.addEventListener("mousemove", function(event) {
mouseX.innerHTML = event.clientX
mouseY.innerHTML = event.clientY
  });
  