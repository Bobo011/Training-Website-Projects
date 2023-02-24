const containerEl = document.querySelectorAll('.container')

// Loop through each container and set its background color and text content
containerEl.forEach(container => {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
  // Set the background color of the container
  container.style.backgroundColor = randomColor;

  // Create a new text node with the color name and append it to the container
  const colorName = document.createTextNode(randomColor);
  container.appendChild(colorName);
});
