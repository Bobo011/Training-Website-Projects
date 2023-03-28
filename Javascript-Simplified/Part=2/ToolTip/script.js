//JAVASCRIPT CODE
import showTooltip from "./tooltip.js";

showTooltip()




// Container Movement
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

  // // If the tooltip is visible, update its position
  // if (tooltip) {
  //   const containerRect = tooltipEl.getBoundingClientRect();
  //   const tooltipRect = tooltip.getBoundingClientRect();

  //   let tooltipTop = containerRect.top - tooltipRect.height - 10;
  //   let tooltipLeft =
  //     containerRect.left + containerRect.width / 2 - tooltipRect.width / 2;

  //   if (tooltipLeft < 0) {
  //     tooltipLeft = 0;
  //   } else if (tooltipLeft + tooltipRect.width > window.innerWidth) {
  //     tooltipLeft = window.innerWidth - tooltipRect.width;
  //   }

  //   if (tooltipTop < 0) {
  //     tooltipTop = containerRect.bottom + 10;
  //   } else if (tooltipTop + tooltipRect.height > window.innerHeight) {
  //     tooltipTop = window.innerHeight - tooltipRect.height;
  //   }

  //   tooltip.style.top = tooltipTop + "px";
  //   tooltip.style.left = tooltipLeft + "px";
  // }
});

//END OF CODE





// const tooltipEl = document.querySelector(".help-text");
// const tooltipText = tooltipEl.getAttribute("data-tooltip");
// let tooltip;

// // Tooltip Appears when mouseover it
// tooltipEl.addEventListener("mouseover", () => {
//   // Create the tooltip and give it the classes
//   const tooltipContainer = document.createElement("div");
//   tooltipContainer.classList.add("tooltip-container");
//   tooltip = document.createElement("div");
//   tooltip.classList.add("tooltip");
//   tooltip.textContent = tooltipText;
//   tooltipContainer.appendChild(tooltip);
//   document.body.appendChild(tooltipContainer);

//   // Get the bounding rectangle of the tooltipEl element
//   const containerRect = tooltipEl.getBoundingClientRect();
//   // Get the bounding rectangle of the tooltip element
//   const tooltipRect = tooltip.getBoundingClientRect();

//   // Calculate the top and left position of the tooltip element
//   let tooltipTop = containerRect.top - tooltipRect.height - 10;
//   let tooltipLeft =
//     containerRect.left + containerRect.width / 2 - tooltipRect.width / 2;

//   // Check if the tooltip goes out of bounds on the left or right side
//   if (tooltipLeft < 0) {
//     tooltipLeft = 0;
//   } else if (tooltipLeft + tooltipRect.width > window.innerWidth) {
//     tooltipLeft = window.innerWidth - tooltipRect.width;
//   }

//   // Check if the tooltip goes out of bounds on the top or bottom side
//   if (tooltipTop < 0) {
//     tooltipTop = containerRect.bottom + 10;
//   } else if (tooltipTop + tooltipRect.height > window.innerHeight) {
//     tooltipTop = window.innerHeight - tooltipRect.height;
//   }

//   // Set the position of the tooltip element
//   tooltip.style.top = tooltipTop + "px";
//   tooltip.style.left = tooltipLeft + "px";
// });

// // Tooltip Disappears when mouseout it
// tooltipEl.addEventListener("mouseout", () => {
//   const tooltipContainer = document.querySelector(".tooltip-container");
//   document.body.removeChild(tooltipContainer);
// });