const tooltipEl = document.querySelector(".help-text");
const tooltipText = tooltipEl.getAttribute("data-tooltip");
let tooltip;

export default function showTooltip(){
    tooltipEl.addEventListener("mouseover", () => {
        // Create the tooltip and give it the classes
        const tooltipContainer = document.createElement("div");
        tooltipContainer.classList.add("tooltip-container");
        tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = tooltipText;
        tooltipContainer.appendChild(tooltip);
        document.body.appendChild(tooltipContainer);
  })
    tooltipDisappear()  
}

function tooltipDisappear(){
    // Tooltip Disappears when mouseout it
tooltipEl.addEventListener("mouseout", () => {
  const tooltipContainer = document.querySelector(".tooltip-container");
  document.body.removeChild(tooltipContainer);
});
}

