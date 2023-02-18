// Get the loading bar and percentage elements
const loadingBar = document.querySelector(".loading-bar");
const percent = document.querySelector(".percent");

// Set the initial percentage to 0
let currentPercent = 0;
percent.textContent = `${currentPercent}%`;

// Define a function that updates the loading bar and percentage
function updateLoading() {
  // Increase the current percentage by 1
  currentPercent++;
  
  // Update the percentage text
  percent.textContent = `${currentPercent}%`;
  
  // Update the width of the loading bar
  loadingBar.style.width = `${currentPercent}%`;
  loadingBar.style.backgroundColor = 'orange';
  
  // If the percentage is not yet 100, call this function again after a short delay
  if (currentPercent < 100) {
    setTimeout(updateLoading, 50);
  }
}

// Call the function to start the loading animation
updateLoading();