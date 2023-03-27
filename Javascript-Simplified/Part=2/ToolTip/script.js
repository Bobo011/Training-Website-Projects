//JAVASCRIPT CODE
//1)The tooltip must appear in relation to the container's position

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

  const containerRect = tooltipEl.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const offset = 10;

  // Calculate the top and left position of the tooltip
  let tooltipTop = containerRect.top - tooltipRect.height - offset;
  let tooltipLeft = containerRect.left + containerRect.width / 2 - tooltipRect.width / 2;

  // Adjust the position of the tooltip if it would go off the screen
  if (tooltipLeft < 0) {
    tooltipLeft = 0;
  } else if (tooltipLeft + tooltipRect.width > window.innerWidth) {
    tooltipLeft = window.innerWidth - tooltipRect.width;
  }
  if (tooltipTop < 0) {
    tooltipTop = containerRect.bottom + offset;
  }

  // Set the position of the tooltip
  tooltip.style.top = tooltipTop + 'px';
  tooltip.style.left = tooltipLeft + 'px';
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