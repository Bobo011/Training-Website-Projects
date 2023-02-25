const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  //numbers will be between 0 and 100
  const size =Math.random()*100;
  //every time a mouse is moved a new span element is created
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  bodyEl.appendChild(spanEl);
//Randomizes the hearts size
  spanEl.style.width = size + 'px'
  spanEl.style.height = size + 'px'
  //removes the heart after 3 seconds
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
