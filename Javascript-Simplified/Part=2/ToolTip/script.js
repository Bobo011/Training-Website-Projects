//JAVASCRIPT CODE
//1)The tooltip must appear in relation to the container's position

const tooltipEl = document.querySelector(".help-text");
const tooltipText = tooltipEl.getAttribute("data-tooltip");
//Tooltip Appears when mouseover it
tooltipEl.addEventListener("mouseover", () => {
  const tooltipContainer = document.createElement("div");
  tooltipContainer.classList.add("tooltip-container");
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = tooltipText;
  tooltipContainer.appendChild(tooltip);
  document.body.appendChild(tooltipContainer);

  // Get the bounding rectangle of the tooltipEl element
  const containerRect = tooltipEl.getBoundingClientRect();
  // Get the bounding rectangle of the tooltip element
  const tooltipRect = tooltip.getBoundingClientRect();

  // Calculate the top and left position of the tooltip element
  const tooltipTop = containerRect.top - tooltipRect.height - 10;
  const tooltipLeft =
    containerRect.left + containerRect.width / 2 - tooltipRect.width / 2;

  // Set the position of the tooltip element
  tooltip.style.top = tooltipTop + "px";
  tooltip.style.left = tooltipLeft + "px";
});

//Tooltip Disappears when mouseout it
tooltipEl.addEventListener("mouseout", () => {
  const tooltipContainer = document.querySelector(".tooltip-container");
  document.body.removeChild(tooltipContainer);
});
//Container Movement
document.addEventListener("keydown", (e) => {
  const container = document.querySelector(".container");

  switch (e.key) {
    case "ArrowLeft":
      container.classList.replace("x-center", "x-left");
      container.classList.replace("x-right", "x-center");
      break;
    case "ArrowRight":
      container.classList.replace("x-center", "x-right");
      container.classList.replace("x-left", "x-center");
      break;
    case "ArrowUp":
      container.classList.replace("y-center", "y-top");
      container.classList.replace("y-bottom", "y-center");
      break;
    case "ArrowDown":
      container.classList.replace("y-center", "y-bottom");
      container.classList.replace("y-top", "y-center");
      break;
  }
});
//END OF CODE
