//JAVASCRIPT CODE
//1)A tooltip must appear when mouse hovers over a text tag with the class of 'help-text'
//2)The tooltip text must have the css class of 
//selected the tooltip and it's text elements
const tooltipEl = document.querySelector('.help-text')
const tooltipText = tooltipEl.getAttribute('data-tooltip');
//Tooltip Appears when mouseover it
tooltipEl.addEventListener('mouseover', () => {
  const tooltipContainer = document.createElement('div');
  tooltipContainer.classList.add('tooltip-container');
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = tooltipText;
  tooltipContainer.appendChild(tooltip);
  document.body.appendChild(tooltipContainer);
});
//Tooltip Disappears when mouseout it
tooltipEl.addEventListener('mouseout', () => {
  const tooltipContainer = document.querySelector('.tooltip-container');
  document.body.removeChild(tooltipContainer);
});





document.addEventListener("keydown", e => {
    const container = document.querySelector(".container")
  
    switch (e.key) {
      case "ArrowLeft":
        container.classList.replace("x-center", "x-left")
        container.classList.replace("x-right", "x-center")
        break
      case "ArrowRight":
        container.classList.replace("x-center", "x-right")
        container.classList.replace("x-left", "x-center")
        break
      case "ArrowUp":
        container.classList.replace("y-center", "y-top")
        container.classList.replace("y-bottom", "y-center")
        break
      case "ArrowDown":
        container.classList.replace("y-center", "y-bottom")
        container.classList.replace("y-top", "y-center")
        break
    }
  })
  //END OF CODE